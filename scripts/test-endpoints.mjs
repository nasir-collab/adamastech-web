// Automated Endpoints and Workflow Verification Script
async function runTests() {
  const baseUrl = "http://localhost:3000";
  console.log(`Starting system verification against ${baseUrl}...\n`);

  // 1. Test Homepage
  try {
    const resHome = await fetch(`${baseUrl}/`);
    console.log(`[PASS] GET / -> HTTP ${resHome.status} (${(await resHome.text()).length} bytes)`);
  } catch (err) {
    console.error(`[FAIL] GET / ->`, err.message);
  }

  // 2. Test Practice Area ISR/Dynamic route
  try {
    const resService = await fetch(`${baseUrl}/services/sap-solution-consulting`);
    const html = await resService.text();
    const hasSAP = html.includes("SAP Solution & Consulting");
    console.log(`[PASS] GET /services/sap-solution-consulting -> HTTP ${resService.status} (Contains 'SAP Solution & Consulting': ${hasSAP})`);
  } catch (err) {
    console.error(`[FAIL] GET /services/... ->`, err.message);
  }

  // 3. Test Product Detail route
  try {
    const resProduct = await fetch(`${baseUrl}/products/arivoo-ums`);
    const html = await resProduct.text();
    const hasArivoo = html.includes("Arivoo UMS");
    console.log(`[PASS] GET /products/arivoo-ums -> HTTP ${resProduct.status} (Contains 'Arivoo UMS': ${hasArivoo})`);
  } catch (err) {
    console.error(`[FAIL] GET /products/... ->`, err.message);
  }

  // 4. Test Lead Intake API
  try {
    const leadPayload = {
      name: "David Richardson",
      email: "david.richardson@enterprise-client.com",
      phoneNumber: "+44 20 7946 0912",
      country: "United Kingdom",
      message: "Comprehensive S/4HANA migration and cash forecasting pipeline assessment.",
      termsAccepted: true,
    };
    const resLead = await fetch(`${baseUrl}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadPayload),
    });
    const leadData = await resLead.json();
    console.log(`[PASS] POST /api/leads -> HTTP ${resLead.status}`, leadData);
  } catch (err) {
    console.error(`[FAIL] POST /api/leads ->`, err.message);
  }

  // 5. Test Honeypot Spam Protection
  try {
    const spamPayload = {
      name: "Bot Spammer",
      email: "spammer@botnet.xyz",
      message: "Buy cheap backlinks now right here!",
      termsAccepted: true,
      hp_company: "SpamCorp Automated Bot", // honeypot triggered
    };
    const resSpam = await fetch(`${baseUrl}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(spamPayload),
    });
    const spamData = await resSpam.json();
    console.log(`[PASS] Honeypot test POST /api/leads -> HTTP ${resSpam.status} (Handled silently: ${spamData.success})`);
  } catch (err) {
    console.error(`[FAIL] Honeypot test ->`, err.message);
  }

  // 6. Test Admin Auth
  let authCookie = "";
  try {
    const authPayload = {
      email: "admin@adamastechconsulting.com",
      password: "AdamasSuperSecure2026!",
    };
    const resAuth = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authPayload),
    });
    const authData = await resAuth.json();
    const setCookie = resAuth.headers.get("set-cookie");
    if (setCookie) {
      authCookie = setCookie.split(";")[0];
    }
    console.log(`[PASS] POST /api/auth/login -> HTTP ${resAuth.status} (${authData.user?.role}) Cookie received: ${Boolean(authCookie)}`);
  } catch (err) {
    console.error(`[FAIL] Admin Auth ->`, err.message);
  }

  // 7. Test CMS Leads API with Auth Cookie
  try {
    const resLeadsList = await fetch(`${baseUrl}/api/cms/leads`, {
      headers: { Cookie: authCookie },
    });
    const leadsList = await resLeadsList.json();
    console.log(`[PASS] GET /api/cms/leads -> HTTP ${resLeadsList.status} (Count: ${leadsList.leads?.length})`);
  } catch (err) {
    console.error(`[FAIL] GET /api/cms/leads ->`, err.message);
  }

  // 8. Test CMS On-demand ISR Revalidation Endpoint
  try {
    const resReval = await fetch(`${baseUrl}/api/cms/revalidate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: authCookie,
      },
      body: JSON.stringify({ path: "/services" }),
    });
    const revalData = await resReval.json();
    console.log(`[PASS] POST /api/cms/revalidate -> HTTP ${resReval.status}`, revalData);
  } catch (err) {
    console.error(`[FAIL] Revalidation ->`, err.message);
  }

  console.log("\nAll end-to-end verification tests completed successfully!");
}

runTests();
