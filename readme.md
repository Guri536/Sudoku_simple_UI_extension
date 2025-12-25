# **Sudoku Simple UI**

**Sudoku Simple UI** is a lightweight Chrome extension for [sudoku.com](https://sudoku.com). While the original site is great, it feels cluttered, sidebars, and extra articles. This extension removes unwanted page elements and provides quality-of-life features.

## **Key Features**

### **Customizable Interface**

Accessed via the extension popup, you can toggle the following UI enhancements in real-time:

* **Dark Mode**: Replaces the bright white background with a dark theme, reducing eye strain immensely.  
* **Clean Mode (Hide Sidebar/Footer)**: Instantly removes the right-hand sidebar and site footer to eliminate visual noise.  
* **Tip Suppression**: Hides the "How to Play" articles and promotional content located below the game board.  
* **Adaptive Centering**: A unique feature that adjusts the game container’s margin. This is perfect for users who want to pin a small video player or notepad to the side of their browser window without overlapping the game.

### **Enhanced Controls**

* **Smart Pencil Toggle**: Press the `.` key on your keyboard to toggle **Notes/Pencil mode**. No more moving your mouse away from the grid just to switch input types.

## **Installation Guide**

Since this is a developer-focused extension, follow these steps to load it manually:

1. **Download**: Clone this repository or download the ZIP file and extract it to a permanent folder on your computer.  
2. **Extensions Page**: Open Google Chrome and go to chrome://extensions/.  
3. **Developer Mode**: Toggle the **Developer mode** switch in the top-right corner.  
4. **Load Unpacked**: Click the **Load unpacked** button and select the folder where you extracted the extension (the folder containing manifest.json).  
5. **Pin it**: For quick access to settings, click the puzzle icon in Chrome and pin **Sudoku Simple UI**.

## **How to Use**

1. Navigate to any game on [sudoku.com](https://sudoku.com).  
2. Click the extension icon in your toolbar to open the **Settings Menu**.  
3. Toggle features like **Dark Mode** or **Hide Sidebar**. Your choices are saved to your Chrome profile and will persist across sessions.  
4. While playing, use the . key to toggle notes quickly.

## **Technical Overview**

* **Manifest V3**: Built using the latest Chrome Extension standards for better security and performance.  
* **Content Scripts**: Uses script.js to inject styles and event listeners directly into the page DOM.  
* **Storage API**: Utilizes chrome.storage.sync to sync your UI preferences across all devices where you are logged into Chrome.  
* **Pointer Events**: The keyboard shortcut simulates native pointer events to ensure compatibility with the site's React-based UI.

## **Author**

**Guri** 

*Disclaimer: This extension is not affiliated with, maintained by, or endorsed by sudoku.com.*