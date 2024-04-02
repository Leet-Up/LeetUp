export {}
 
chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    if (request.jwt) {
        console.log('Token ::: ', request.jwt);
        sendResponse({ success: true, message: 'Token has been received' });
    }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    const url = new URL(changeInfo.url);
    if (url.hostname === 'leetcode.com') {
        // get the problem slug
        // leetcode.com/problems/two-sum
        const slug = url.pathname.split('/')[2];

       
    }
  }
});