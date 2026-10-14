async function main() {
  const res = await fetch('https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/pico/developer_web_next/home_site/_next/static/chunks/app/%5Blang%5D/layout-33937ccff151df55.js');
  const text = await res.text();
  const regex = /feedback_btn/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    console.log('Match at', match.index);
    console.log(text.slice(Math.max(0, match.index - 300), match.index + 500));
    console.log('-----------------------------');
  }
}
main();
