export default {
  async scheduled(event, env, ctx) {
    const hook = env.VERCEL_DEPLOY_HOOK;
    if (!hook) {
      console.error("VERCEL_DEPLOY_HOOK is not set in Worker environment");
      return;
    }

    try {
      const res = await fetch(hook, { method: "POST" });
      const text = await res.text();
      console.log("Deploy hook response status:", res.status);
      console.log("Response preview:", text.slice(0, 200));
    } catch (err) {
      console.error("Failed to POST deploy hook:", err && err.message ? err.message : err);
    }
  },
};

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname === "/trigger") {
      const hook = env.VERCEL_DEPLOY_HOOK;
      if (!hook) {
        return new Response(JSON.stringify({ ok: false, error: "Missing VERCEL_DEPLOY_HOOK" }), {
          status: 500,
          headers: { "content-type": "application/json", "cache-control": "no-store" },
        });
      }
      const res = await fetch(hook, { method: "POST" });
      const text = await res.text();
      return new Response(
        JSON.stringify({ ok: true, status: res.status, preview: text.slice(0, 200) }),
        { status: 200, headers: { "content-type": "application/json", "cache-control": "no-store" } }
      );
    }
    return new Response("OK", { status: 200 });
  },
};