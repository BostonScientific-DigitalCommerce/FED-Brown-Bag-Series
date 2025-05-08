import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

window.loadMarkdown = async function(filename) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = 'Loading...';
  try {
    const res = await fetch(`/content/${filename}`);
    if (!res.ok) throw new Error('Not found');
    const md = await res.text();
    contentDiv.innerHTML = marked.parse(md);
  } catch (e) {
    contentDiv.innerHTML = 'Error loading content.';
  }
}
