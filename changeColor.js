document.body.querySelectorAll('div').forEach( divTag => {
  divTag.style.border = '1px solid red';
  divTag.addEventListener("mouseover", function(e) {
    chrome.runtime.sendMessage({message: JSON.stringify(e.fromElement, ["tagName", "id", "className"])});
    console.log('this is hover event', e.fromElement, JSON.stringify(e.fromElement, ["tagName", "id", "className", "nodeValue"]));
  })
});
document.body.style.color = 'magenta';
