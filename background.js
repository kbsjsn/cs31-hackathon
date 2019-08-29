chrome.runtime.onMessage.addListener(function(msg, sender) {
  // chrome.pageAction.show(sender.tab.id);
  // alert('background is working' + msg.message);
  chrome.storage.sync.set({domElement: msg.message}, () => {
    console.log('Value is set to', msg.message);
  })
});