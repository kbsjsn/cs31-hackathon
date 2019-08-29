document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById("start");
  startButton.addEventListener('click', () => {
    chrome.tabs.getSelected(null, tab => {
      alert('Click in popup working', tab);
    });
  }, false);

  chrome.storage.onChanged.addListener((obj, namespace) => {
    console.log("You're reading changed storage", obj[domElement], namespace)
  })
}, false);
