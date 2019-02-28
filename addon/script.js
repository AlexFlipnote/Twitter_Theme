// Simply insert that into the head
var isFirefox = typeof InstallTrigger !== 'undefined';

function injectCSS(css) {
  styleCss = document.createElement("style");
  styleCss.type = "text/css";
  styleCss.id = "alexflipnote_twittertheme";
  styleCss.innerText = css;
  document.documentElement.appendChild(styleCss);
}

chrome.storage.local.get({
  customcss: "",
  twittertheme: true
}, function(items) {
  if (items.twittertheme == true) {
    if (isFirefox) {
      styleCss = document.createElement("link");
      styleCss.href = "https://twittertheme.alexflipnote.dev/theme.css";
      styleCss.type = "text/css";
      styleCss.rel = "stylesheet";
      document.head.appendChild(styleCss);
    } else {
      injectCSS("@import url('https://twittertheme.alexflipnote.dev/theme.css');");
    }
  }

  if (items.customcss.length > 2) {
    injectCSS(items.customcss);
  }
})
