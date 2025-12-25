# **Sudoku Simple UI**

**Sudoku Simple UI** is a Chrome extension designed to provide a cleaner, distraction-free experience for [sudoku.com](https://sudoku.com). It removes unnecessary page elements, improves the layout, and adds convenient keyboard shortcuts.

## **Features**

* **Distraction-Free Interface**: Automatically removes sidebars, tip articles, and the site footer to focus the view on the game board.  
* **Keyboard Shortcut**: Press the `.` key to toggle the **Pencil/Notes** tool without needing to click the UI button.  
* **Adaptive Layout**: Automatically adjusts the game container's left margin based on the window width to provide white space for pinning a notepad window or video player.

## **Installation**

1. Download or clone this repository to your local machine.  
2. Open Google Chrome and navigate to chrome://extensions/.  
3. Enable **Developer mode** in the top-right corner.  
4. Click the **Load unpacked** button.  
5. Select the directory containing the manifest.json file.

## **Usage**

1. Navigate to [sudoku.com](https://sudoku.com).  
2. The extension will automatically clean up the interface upon loading.  
3. Use the `.` key to toggle notes/pencil mode while playing.

## **Technical Details**

* **Manifest Version**: 3  
* **Permissions**: Access to https://sudoku.com/\*  
* **Content Script**: Runs script.js on document\_idle.

## **Author**

**Guri**