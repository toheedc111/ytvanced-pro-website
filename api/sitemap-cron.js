// Triggers a Vercel Deploy Hook to rebuild and republish the sitemap.
// Scheduled hourly via vercel.json crons.

module.exports = async (req, res) => {
  const deployHook = process.env.VERCEL_DEPLOY_HOOK;

  if (!deployHook) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: 'VERCEL_DEPLOY_HOOK not set' }));
    return;
  }

  try {
    const response = await fetch(deployHook, { method: 'POST' });
    const text = await response.text();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.end(
      JSON.stringify({
        ok: true,
        status: response.status,
        triggered: true,
        preview: text.slice(0, 200),
      })
    );
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, error: err?.message || 'Unknown error' }));
  }
};