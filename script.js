console.log("Loaded custom script");
var asideEle = document.getElementById("aside");
var tipsEle = document.getElementById("tips-articles-wrap");
var footer = document.getElementsByTagName("footer")[0];

var mouseEvent = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
});

if (asideEle)
    asideEle.remove();
if (tipsEle)
    tipsEle.remove();
if (footer)
    footer.remove();


document.addEventListener('keydown', function (event) {
    var pencil = document.querySelector('.game-controls-pencil svg');

    if (event.key == '.') {
        if (pencil)
            console.log("What")
            pencil.dispatchEvent(mouseEvent);
    }
});
