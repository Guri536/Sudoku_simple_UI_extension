document.addEventListener("DOMContentLoaded", () => {
  const settings = [
    { id: "darkModeToggle", key: "darkMode", action: "toggleDarkMode" },
    { id: "sidebarToggle", key: "hideSidebar", action: "toggleSidebar" },
    { id: "tipsToggle", key: "hideTips", action: "toggleTips" },
    { id: "footerToggle", key: "hideFooter", action: "toggleFooter" },
    { id: "marginToggle", key: "adjustMargins", action: "toggleMargins" }
  ];

  settings.forEach((setting) => {
    const toggle = document.getElementById(setting.id);
    chrome.storage.sync.get(setting.key, (data) => {
      let isChecked;
      if (setting.key === "darkMode") {
        isChecked = !!data[setting.key];
      } else {
        isChecked = data[setting.key] !== false;
      }
      toggle.checked = isChecked;
    });

    toggle.addEventListener("change", () => {
      const isEnabled = toggle.checked;

      const saveObj = {};
      saveObj[setting.key] = isEnabled;
      chrome.storage.sync.set(saveObj);

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: setting.action,
            enable: isEnabled,
          });
        }
      });
    });
  });
});
