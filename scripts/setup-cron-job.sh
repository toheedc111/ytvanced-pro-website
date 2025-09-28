#!/bin/bash

# Script to set up hourly cron job for Google Search Console updates

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Setting up hourly cron job for Google Search Console updates...${NC}"

# Get the full path to the update script
SCRIPT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/update-search-console.sh"

# Verify the script exists
if [ ! -f "$SCRIPT_PATH" ]; then
    echo -e "${RED}Error: Update script not found at $SCRIPT_PATH${NC}"
    exit 1
fi

# Make sure the script is executable
chmod +x "$SCRIPT_PATH"

# Create the cron job entry
CRON_JOB="0 * * * * $SCRIPT_PATH >> /var/log/search-console-update.log 2>&1"

# Add to crontab
(crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -

if [ $? -eq 0 ]; then
    echo -e "${GREEN}Successfully added hourly cron job for Google Search Console updates${NC}"
    echo "The script will run every hour at the top of the hour"
    echo "Logs will be written to /var/log/search-console-update.log"
    echo ""
    echo "To view current cron jobs, run: crontab -l"
    echo "To remove the cron job, run: crontab -r"
else
    echo -e "${RED}Error: Failed to add cron job${NC}"
    exit 1
fi

echo -e "${GREEN}Setup completed successfully!${NC}"