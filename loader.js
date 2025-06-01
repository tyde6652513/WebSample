// 統一版本號，只要改這裡就好
const version = '20240601';

// 加載 CSS
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = `style.css?v=${version}`;
document.head.appendChild(css);

// 加載 JS
const js = document.createElement('script');
js.src = `script.js?v=${version}`;
document.body.appendChild(js);