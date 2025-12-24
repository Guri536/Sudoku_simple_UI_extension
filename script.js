console.log("Loaded custom script");
var asideEle = document.getElementById("aside");
var tipsEle = document.getElementById("tips-articles-wrap");
var footer = document.getElementsByTagName("footer")[0];

if (asideEle)
    asideEle.remove();
if (tipsEle)
    tipsEle.remove();
if (footer)
    footer.remove();


document.addEventListener('keydown', function (event) {
    var element = document.querySelector('.game-controls-pencil');

    const pDown = new PointerEvent('pointerdown', { bubbles: true, cancelable: true, view: window, button: 0, buttons: 1, pointerId: 1, pointerType: 'mouse' });
    const pUp   = new PointerEvent('pointerup',   { bubbles: true, cancelable: true, view: window, button: 0, buttons: 0, pointerId: 1, pointerType: 'mouse' });
    const mDown = new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window, button: 0, buttons: 1 });
    const mUp   = new MouseEvent('mouseup',   { bubbles: true, cancelable: true, view: window, button: 0, buttons: 0 });
    const click = new MouseEvent('click',     { bubbles: true, cancelable: true, view: window, button: 0, buttons: 0 });

    if (event.key == '.') {
        if (element){
            element.dispatchEvent(pDown);
            element.dispatchEvent(mDown);
            element.dispatchEvent(pUp);
            element.dispatchEvent(mUp);
            element.dispatchEvent(click);
        }
    }
});

function adjustLayout() {
    var wrapper = document.querySelector('#body > div.container.site-content-wrapper');
    
    if (wrapper) {
        // Option B: If you want a specific calculation based on window width:
        var width = window.innerWidth;
        if (width > 1350) {
            wrapper.style.marginLeft = "-150px"; 
        } else if (width > 1000) {
            wrapper.style.marginLeft = "-20px"; 
        }
        else {
            wrapper.style.marginLeft = "0px";
        }
    }
}

// Run once on startup to fix initial view
adjustLayout();

// Run automatically whenever the user resizes the browser
window.addEventListener('resize', adjustLayout);
