/*
var finalLink;

function changeURL(tab){
  chrome.tabs.update(tab.id, {url: finalLink});
}

function whenURLIsSubmitted(tabid, changeinfo, tab){
  var url = tab.url;
  if(url.substring(0, 9) == "http://r/"){
    var subreddit = url.substring(9);
    finalLink = "https://www.reddit.com/r/" + subreddit;
    chrome.tabs.getSelected(null, changeURL);
  }
  else if(url.substring(0, 10) == "http:///r/"){
    var subreddit = url.substring(10);
    finalLink = "https://www.reddit.com/r/" + subreddit;
    chrome.tabs.getSelected(null, changeURL);
  }
  else if(url.indexOf("q=r%2F") != -1){
    start = url.indexOf('q=r%2F') + 6;
    var subreddit = url.substring(start);
    subreddit = subreddit.substring(0, subreddit.indexOf('&'));
    finalLink = "https://www.reddit.com/r/" + subreddit;
    chrome.tabs.getSelected(null, changeURL);
  }
  //https://www.google.com/search?q=r%2Fboop&oq=r%2Fboop&aqs=chrome.0.69i59j69i57j69i58j69i60l2.1407j0j9&sourceid=chrome&es_sm=0&ie=UTF-8
  //https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#q=r%2Fhelp&es_th=1
}

//set callback for when url is submitted
chrome.tabs.onUpdated.addListener(whenURLIsSubmitted);
*/

const reddit = 'https://www.reddit.com/r/'


chrome.omnibox.onInputEntered.addListener(
function(text) {
	var finalurl = (reddit + text);
    chrome.tabs.query({
			active: true,               // Select active tabs
			lastFocusedWindow: true     // In the current window
		},  
		function(array_of_Tabs) {
			var tab = array_of_Tabs[0];
			chrome.tabs.update(tab.id, {url: finalurl});
			}
		)
	}
);

