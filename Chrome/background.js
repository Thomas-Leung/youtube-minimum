// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete') {
//     // Pass data from to the contentScript
//     if (tab.url && tab.url.includes('youtube')) {
//       chrome.tabs.sendMessage(tabId, {
//         value: tab.url,
//       });
//     }
//     // console.log(tab.url);
//   }
// });
