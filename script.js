console.log("Loaded custom script");

function toggleElement(selector, shouldHide) {
  let elements;
  if (selector.startsWith("#") || selector.startsWith(".")) {
    elements = document.querySelectorAll(selector);
  } else {
    elements = document.getElementsByTagName(selector);
  }

  for (let el of elements) {
    if (shouldHide) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
  }
}

// Dark Mode Logic

const darkModeStyles = `
    body, html { background-color: #121212 !important; color: #e0e0e0 !important; }
    .site-wrapper, .header, .game-wrapper { background-color: #121212 !important; }
    h1, h2, h3, p, span { color: #e0e0e0 !important; }
    .game-cell { background-color: #1e1e1e !important; color: #fff !important; }
`;

function setDarkMode(enable) {
  const styleId = "sudoku-simple-ui-dark-mode";
  let styleTag = document.getElementById(styleId);

  if (enable) {
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.textContent = darkModeStyles;
      document.head.appendChild(styleTag);
    }
  } else {
    if (styleTag) styleTag.remove();
  }
}

chrome.storage.sync.get(
  [
    "darkMode",
    "hideSidebar",
    "hideTips",
    "hideFooter",
    "adjustMargins",
  ],
  (data) => {
    if (data.darkMode) setDarkMode(true);
    if (data.shrinkControls) setShrink(true);

    toggleElement("#aside", data.hideSidebar !== false);
    toggleElement("#tips-articles-wrap", data.hideTips !== false);
    toggleElement("footer", data.hideFooter !== false);
    isMarginEnabled = data.adjustMargins !== false;
    adjustLayout();
  }
);

// Listen for runtime messages from Popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case "toggleDarkMode":
      setDarkMode(request.enable);
      break;
    case "toggleSidebar":
      toggleElement("#aside", request.enable);
      break;
    case "toggleTips":
      toggleElement("#tips-articles-wrap", request.enable);
      break;
    case "toggleFooter":
      toggleElement("footer", request.enable);
      break;
    case "toggleMargins":
      isMarginEnabled = request.enable;
      adjustLayout();
      break;
  }
});

// Keyboard shortcuts

document.addEventListener("keydown", function (event) {
  var element = document.querySelector(".game-controls-pencil");

  const pDown = new PointerEvent("pointerdown", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
    buttons: 1,
    pointerId: 1,
    pointerType: "mouse",
  });
  const pUp = new PointerEvent("pointerup", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
    buttons: 0,
    pointerId: 1,
    pointerType: "mouse",
  });
  const mDown = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
    buttons: 1,
  });
  const mUp = new MouseEvent("mouseup", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
    buttons: 0,
  });
  const click = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
    buttons: 0,
  });

  if (event.key == ".") {
    if (element) {
      element.dispatchEvent(pDown);
      element.dispatchEvent(mDown);
      element.dispatchEvent(pUp);
      element.dispatchEvent(mUp);
      element.dispatchEvent(click);
    }
  }
});

let isMarginEnabled = true;

function adjustLayout() {
  var wrapper = document.querySelector(
    "#body > div.container.site-content-wrapper"
  );
  if (!wrapper) return;

  if (isMarginEnabled) {
    wrapper.style.marginLeft = "";
    return;
  }

  var width = window.innerWidth;
  if (width > 1350) {
    wrapper.style.marginLeft = "-150px";
  } else if (width > 1000) {
    wrapper.style.marginLeft = "-20px";
  } else {
    wrapper.style.marginLeft = "0px";
  }
}
adjustLayout();
window.addEventListener("resize", adjustLayout);
