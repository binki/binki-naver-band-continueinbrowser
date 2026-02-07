// ==UserScript==
// @name binki-naver-band-continueinbrowser
// @homepageURL https://github.com/binki/binki-naver-band-continueinbrowser
// @version 1.0.0
// @match https://*.band.us/*
// @require https://github.com/binki/binki-userscript-when-element-query-selector-async/raw/0a9c204bdc304a9e82f1c31d090fdfdf7b554930/binki-userscript-when-element-query-selector-async.js
// ==/UserScript==

(async () => {
  const buttonSelector = 'button._btnContinueInBrowser';
  while (true) {
    const buttonContinueInBrowser = await whenElementQuerySelectorAsync(document.body, buttonSelector);
    buttonContinueInBrowser.click();
  }
})();
