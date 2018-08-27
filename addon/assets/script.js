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
},function(items) {
  if (items.twittertheme == true) {
    if (isFirefox) {
      styleCss = document.createElement("link");
      styleCss.href = "https://rawgit.com/AlexFlipnote/Twitter_Theme/master/theme.css";
      styleCss.type = "text/css";
      styleCss.rel = "stylesheet";
      document.head.appendChild(styleCss);
    } else {
      injectCSS("@import url('https://rawgit.com/AlexFlipnote/Twitter_Theme/master/theme.css');");
    }
  }

  if (items.customcss.length > 2) {
    injectCSS(items.customcss);
  }
})
