---

# 📑 Bookmark Manager

A lightweight, web-based Bookmark Manager that lets users organize, view, and manage bookmarks by category — with all data stored locally via `localStorage`.

---

## 🚀 Features

- ✅ Add bookmarks with name, URL, and category  
- 🔍 Filter and view bookmarks by category  
- ❌ Delete bookmarks individually  
- 🔁 Toggle between bookmark list and form view  
- 💾 Stores all data persistently in the browser using `localStorage`

---

## 🖼️ UI Sections

- `#main-section` — Homepage and navigation  
- `#form-section` — Add bookmark form  
- `#bookmark-list-section` — Displays bookmarks by category  

---

## 📁 Project Structure

```bash
bookmark-manager/
├── index.html       # Main HTML file
├── style.css        # Styling for the app
└── script.js        # Core app logic and interactions
```

---

## 💻 Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- localStorage API  

---

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/bookmark-manager.git
   cd bookmark-manager
   ```

2. **Open the App:**
   Open `index.html` in any modern browser.  
   _No server or setup required!_

---

## 🧪 How It Works

### ➕ Add a Bookmark
1. Select a category from the dropdown  
2. Click **Add Bookmark**  
3. Enter the bookmark’s name and URL  
4. Click **Submit** — your bookmark is saved via `localStorage`

### 👁️ View Bookmarks
Click **View Category** to see all bookmarks in the selected category.

### 🗑️ Delete a Bookmark
Select a bookmark using the radio button and click **Delete Bookmark**.

---

## ✅ Tests & Functionality

- `getBookmarks()` returns only valid and clean entries  
- Form toggling works correctly  
- UI updates dynamically with every interaction  
- Handles invalid/corrupted `localStorage` data gracefully

---

## 📷 Screenshot

> _Add a screenshot of your application UI here to showcase how it looks._

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo and submit a pull request.

---

## 🪪 License

This project is licensed under the **MIT License**.

---

**Built with ❤️ for learning, productivity, and browser-based simplicity.**

---
