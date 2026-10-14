async function main() {
  const res = await fetch('https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/pico/developer_web_next/home_site/_next/static/chunks/app/%5Blang%5D/layout-33937ccff151df55.js');
  const text = await res.text();
  const idx = text.indexOf('move_eye');
  console.log('Near move_eye:', text.slice(Math.max(0, idx - 500), idx + 500));
}
main();
