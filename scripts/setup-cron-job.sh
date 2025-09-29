#!/bin/bash

# Enhanced script to set up automatic sitemap updates with multiple scheduling options

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
SCHEDULE="hourly"
LOG_DIR="$HOME/logs"
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Function to display usage
show_usage() {
    echo -e "${BLUE}Usage: $0 [OPTIONS]${NC}"
    echo ""
    echo "Options:"
    echo "  -s, --schedule SCHEDULE    Set update schedule (hourly, daily, weekly)"
    echo "  -l, --log-dir DIR         Set log directory (default: ~/logs)"
    echo "  -h, --help               Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                       # Set up hourly updates (default)"
    echo "  $0 -s daily             # Set up daily updates"
    echo "  $0 -s weekly            # Set up weekly updates"
    echo "  $0 -l /var/log          # Use custom log directory"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -s|--schedule)
            SCHEDULE="$2"
            shift 2
            ;;
        -l|--log-dir)
            LOG_DIR="$2"
            shift 2
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            show_usage
            exit 1
            ;;
    esac
done

# Validate schedule
case $SCHEDULE in
    hourly|daily|weekly)
        ;;
    *)
        echo -e "${RED}Error: Invalid schedule '$SCHEDULE'. Use: hourly, daily, or weekly${NC}"
        exit 1
        ;;
esac

echo -e "${YELLOW}Setting up $SCHEDULE sitemap updates...${NC}"

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"
if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Cannot create log directory $LOG_DIR${NC}"
    exit 1
fi

# Get the full path to the update script
SCRIPT_PATH="$PROJECT_ROOT/scripts/update-search-console.sh"

# Verify the script exists
if [ ! -f "$SCRIPT_PATH" ]; then
    echo -e "${RED}Error: Update script not found at $SCRIPT_PATH${NC}"
    exit 1
fi

# Make sure the script is executable
chmod +x "$SCRIPT_PATH"

# Set up cron schedule based on user choice
case $SCHEDULE in
    hourly)
        CRON_SCHEDULE="0 * * * *"
        DESCRIPTION="every hour at the top of the hour"
        ;;
    daily)
        CRON_SCHEDULE="0 2 * * *"
        DESCRIPTION="daily at 2:00 AM"
        ;;
    weekly)
        CRON_SCHEDULE="0 2 * * 0"
        DESCRIPTION="weekly on Sunday at 2:00 AM"
        ;;
esac

# Create log file path
LOG_FILE="$LOG_DIR/sitemap-update.log"

# Create the cron job entry
CRON_JOB="$CRON_SCHEDULE cd $PROJECT_ROOT && $SCRIPT_PATH >> $LOG_FILE 2>&1"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "$SCRIPT_PATH"; then
    echo -e "${YELLOW}Existing cron job found. Removing old entry...${NC}"
    crontab -l 2>/dev/null | grep -v "$SCRIPT_PATH" | crontab -
fi

# Add new cron job
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Successfully set up $SCHEDULE sitemap updates!${NC}"
    echo ""
    echo -e "${BLUE}📋 Configuration Details:${NC}"
    echo "  Schedule: $DESCRIPTION"
    echo "  Script: $SCRIPT_PATH"
    echo "  Log file: $LOG_FILE"
    echo "  Project root: $PROJECT_ROOT"
    echo ""
    echo -e "${BLUE}🛠️  Management Commands:${NC}"
    echo "  View cron jobs: crontab -l"
    echo "  View logs: tail -f $LOG_FILE"
    echo "  Remove cron job: crontab -e (then delete the line)"
    echo ""
    echo -e "${BLUE}🔍 Verification:${NC}"
    echo "  Test script: $SCRIPT_PATH"
    echo "  Check next run: crontab -l | grep sitemap"
    echo ""
    echo -e "${GREEN}🎉 Your sitemap will now update $DESCRIPTION automatically!${NC}"
else
    echo -e "${RED}❌ Error: Failed to add cron job${NC}"
    exit 1
fi

# Create a simple monitoring script
MONITOR_SCRIPT="$PROJECT_ROOT/scripts/monitor-sitemap-updates.sh"
cat > "$MONITOR_SCRIPT" << 'EOF'
#!/bin/bash

# Simple monitoring script for sitemap updates

LOG_FILE="$HOME/logs/sitemap-update.log"
SITEMAP_FILE="$(dirname "$0")/../public/sitemap.xml"

echo "🔍 Sitemap Update Monitor"
echo "========================"

if [ -f "$SITEMAP_FILE" ]; then
    echo "📄 Sitemap file: $SITEMAP_FILE"
    echo "📅 Last modified: $(stat -f "%Sm" "$SITEMAP_FILE")"
    echo "📊 File size: $(stat -f "%z bytes" "$SITEMAP_FILE")"
else
    echo "❌ Sitemap file not found: $SITEMAP_FILE"
fi

echo ""

if [ -f "$LOG_FILE" ]; then
    echo "📋 Recent log entries (last 10 lines):"
    echo "======================================="
    tail -10 "$LOG_FILE"
else
    echo "❌ Log file not found: $LOG_FILE"
fi

echo ""
echo "🕐 Current cron jobs:"
echo "===================="
crontab -l | grep -i sitemap || echo "No sitemap-related cron jobs found"
EOF

chmod +x "$MONITOR_SCRIPT"
echo -e "${BLUE}📊 Created monitoring script: $MONITOR_SCRIPT${NC}"

echo -e "${GREEN}Setup completed successfully!${NC}"