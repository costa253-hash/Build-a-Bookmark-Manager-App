function getBookmarks() {
    const bookmarks = localStorage.getItem("bookmarks");
    try {
      const parsed = JSON.parse(bookmarks);
      if (
        Array.isArray(parsed) &&
        parsed.every(
          item =>
            typeof item === "object" &&
            item !== null &&
            "name" in item &&
            "url" in item &&
            "category" in item
        )
      ) {
        return parsed;
      }
      return [];
    } catch {
      return [];
    }
  }
  
  function displayOrCloseForm() {
    document.getElementById("main-section").classList.toggle("hidden");
    document.getElementById("form-section").classList.toggle("hidden");
  }

  function displayOrHideCategory() {
    document.getElementById("main-section").classList.toggle("hidden");
    document.getElementById("bookmark-list-section").classList.toggle("hidden");
  }

  document.getElementById("add-bookmark-button").addEventListener("click", () => {
    const category = document.getElementById("category-dropdown").value;
    document.querySelectorAll(".category-name").forEach(el => el.textContent = category);
    displayOrCloseForm();
  });

  document.getElementById("close-form-button").addEventListener("click", () => {
    displayOrCloseForm();
  });

  document.getElementById("add-bookmark-button-form").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const url = document.getElementById("url").value;
    const category = document.getElementById("category-dropdown").value;

    const bookmarks = getBookmarks();
    bookmarks.push({ name, url, category });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
    displayOrCloseForm();
  });

  document.getElementById("view-category-button").addEventListener("click", () => {
    const category = document.getElementById("category-dropdown").value;
    document.querySelectorAll(".category-name").forEach(el => el.textContent = category);

    const bookmarks = getBookmarks();
    const categoryList = document.getElementById("category-list");
    categoryList.innerHTML = ""; // Clear previous

    const filtered = bookmarks.filter(b => b.category === category);

    if (filtered.length === 0) {
      categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    } else {
      filtered.forEach(bookmark => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "selected-bookmark";
        radio.id = bookmark.name;
        radio.value = bookmark.name;

        const anchor = document.createElement("a");
        anchor.href = bookmark.url;
        anchor.target = "_blank";
        anchor.textContent = bookmark.name;

        const label = document.createElement("label");
        label.htmlFor = bookmark.name;
        label.appendChild(anchor);

        categoryList.appendChild(radio);
        categoryList.appendChild(label);
        categoryList.appendChild(document.createElement("br"));
      });
    }

    displayOrHideCategory();
  });

  document.getElementById("close-list-button").addEventListener("click", () => {
    displayOrHideCategory();
  });

  document.getElementById("delete-bookmark-button").addEventListener("click", () => {
    const selectedRadio = document.querySelector('input[name="selected-bookmark"]:checked');
    if (!selectedRadio) return;

    const category = document.getElementById("category-dropdown").value;
    const bookmarkName = selectedRadio.value;

    let bookmarks = getBookmarks();
    bookmarks = bookmarks.filter(b => !(b.name === bookmarkName && b.category === category));
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    // Refresh list
    document.getElementById("view-category-button").click();
  });