
const reddit = 'https://www.reddit.com/r/';

chrome.omnibox.onInputEntered.addListener(
    function(text) {
      const finalUrl = (reddit + text);
      chrome.tabs.query({
        active: true, // Select active tabs
        lastFocusedWindow: true, // In the current window
      },
      function(arrayOfTabs) {
        const tab = arrayOfTabs[0];
        void chrome.tabs.update(tab.id, {url: finalUrl});
      },
      );
    },
);

