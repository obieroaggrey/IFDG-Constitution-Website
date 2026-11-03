
/* Shared navigation for the IFDG constitution website. */

/* Lists the section pages belonging to each article. */
const articlePages = {
    "article-one": [
        "article-one-section-one.html",
        "article-one-section-two.html",
        "article-one-section-three.html"
    ],

    "article-two": [
        "article-two-section-one.html",
        "article-two-section-two.html"
    ],

    "article-three": [
        "article-three-section-one.html",
        "article-three-section-two.html",
        "article-three-section-three.html",
        "article-three-section-four.html",
        "article-three-section-five.html",
        "article-three-section-six.html",
        "article-three-section-seven.html"
    ],

    "article-four": [
        "article-four-section-one.html",
        "article-four-section-two.html",
        "article-four-section-three.html",
        "article-four-section-five.html",
        "article-four-section-six.html"
    ]
};

/* Identifies the current page and its folder. */
const currentFile = window.location.pathname.split("/").pop();
const inSectionsFolder = window.location.pathname.includes("/sections/");
const sectionFolder = inSectionsFolder ? "" : "sections/";

/* Finds the article menu associated with a section page. */
function findArticleMenu(fileName) {
    for (const [article, pages] of Object.entries(articlePages)) {
        if (pages.includes(fileName)) {
            return article + "-menu.html";
        }
    }
    return "";
}

/* Creates a navigation area at the bottom of the page. */
function addConstitutionNavigation() {
    const main = document.querySelector("main");

    if (!main) return;

    const nav = document.createElement("nav");
    nav.className = "constitution-navigation";

    const tableLink = document.createElement("a");
// Directs section pages to the constitution contents file.
tableLink.href = inSectionsFolder
    ? "../documents/constitution.html"
    : "documents/constitution.html";
    tableLink.textContent = "Main Table of Contents";

    nav.appendChild(tableLink);

    const articleMenu = findArticleMenu(currentFile);

    if (articleMenu) {
        const menuLink = document.createElement("a");
        menuLink.href = articleMenu;
        menuLink.textContent = "Back to Article Contents";
        nav.appendChild(menuLink);
    }

    main.appendChild(nav);
}

/* Adds simple styling for the shared navigation links. */
function addNavigationStyles() {
    const style = document.createElement("style");

    style.textContent = `
        .constitution-navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 28px;
            padding-top: 15px;
            border-top: 1px solid #d7e1e6;
        }

        .constitution-navigation a {
            color: #138366;
            font-weight: bold;
            text-decoration: none;
        }

        .constitution-navigation a:hover {
            color: #143F56;
            text-decoration: underline;
        }
    `;

    document.head.appendChild(style);
}

/* Runs the navigation functions after the page has loaded. */
document.addEventListener("DOMContentLoaded", () => {
    addNavigationStyles();
    addConstitutionNavigation();
});
