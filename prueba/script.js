var tabs = document.getElementsByClassName('tabs');
for (const tab of tabs) {
    var initial = tab.dataset.tabsInitial;
    var content = tab.nextElementSibling;

    // Hide all contents
    for (const tabContent of content.children) {
        tabContent.style.display = "none";
    }

    // Display initial tabs
    if (!initial) {
        initial = 1
    }
    --initial;
    tab.children[initial].classList.add("active");
    content.children[initial].removeAttribute("style");

    // Add handlers
    for (const tabElement of tab.children) {
        tabElement.addEventListener("click", e => {
            var parent = tabElement.parentElement;
            var index = Array.prototype.indexOf.call(parent.children, tabElement);

            if (tabElement.classList.contains("active")) {
                e.preventDefault();
            }

            for (const otherTab of tabElement.parentElement.children) {
                otherTab.classList.remove("active");
            }
            tabElement.classList.add("active");

            var contents = tabElement.parentElement.nextElementSibling;
            for (const content of contents.children) {
                content.style.display = "none";
            }

            contents.children[index].removeAttribute("style");
        });
    }

}

function whichChild(elem) {
    var i = 0;
    while ((elem = elem.previousSibling) != null) ++i;
    return i;
}