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
    const authorized = url.searchParams.get('authorized');
    const code = url.searchParams.get('jwt');

    if (authorized === 'true') {
      // the user has authorized
      chrome.tabs.remove(tabId);

      // send the code to the background script

      chrome.runtime.sendMessage({ action: 'authorized', jwt: code });

      chrome.storage.local.set({ jwt: code });


      // go back to the previous tab
      chrome.storage.local.get('previousTabId', function(data) {
        if (data.previousTabId) {
          chrome.tabs.update(data.previousTabId, { active: true });
        }
      });
    }
  }
});