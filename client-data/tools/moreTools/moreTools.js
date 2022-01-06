(function () {
  const initializeAutoResizeToolbar = () => {
    const image = document.createElement("img");
    image.setAttribute("class", "tool-icon tool-icon-dimension");
    image.setAttribute("src", "tools/moreTools/icon.svg");
    const autoNavMore = document.createElement("li");
    autoNavMore.setAttribute("id", "autoNavMore");
    autoNavMore.setAttribute("class", "tool tools-list");
    autoNavMore.appendChild(image);
    autoNavMore.addEventListener("click", (event) => {
      const moreToolsContainer = $("#more-tools-container");
      const moreTools = $("#more-tools");
      moreTools.empty();
      moreToolsContainer.toggle();
      $("#autoNavMoreList > li").each(function () {
        // use $(this) as an li
        const toolTitle = document.createElement("p");
        toolTitle.innerText = $(this).children(".tool-name").text();
        moreTools.append(toolTitle);
        const subTools = $(this).children(".sub-tools").first().clone();
        if (subTools.children().length) {
          subTools.children().each(function (index) {
            $(this).on("click", () => {
              const toolName = $(this).children(":first").attr("id").split("-")[1];
              Tools.change(toolName);
              if (toolName === "Wolfram") {
                const searchInput = $(subTools[index]).find("#wolfram-input");
                searchInput.focus();
                searchInput.unbind();
                searchInput.keypress((e) => {
                  const key = e.which;
                  if (key === 13 && searchInput.val()) {
                    Tools.list.Wolfram.search(searchInput.val());
                  }
                });
                const searchButton = $(subTools[index]).find("img");
                searchButton.unbind();
                searchButton.on("click", () => {
                  if (searchInput.val()) {
                    Tools.list.Wolfram.search(searchInput.val());
                  }
                });
              } else {
                moreToolsContainer.hide();
              }
            });
          });
          moreTools.append(subTools);
        } else {
          const toolIcon = $(this).children(".tool-icon").first().clone();
          const toolSpan = document.createElement("span");
          toolSpan.setAttribute(
            "id",
            "toolID-" + $(this).children(".tool-name").text()
          );
          toolSpan.appendChild(toolIcon[0]);
          toolSpan.addEventListener("click", () => {
            Tools.change($(this).children(".tool-name").text());
            moreToolsContainer.hide();
          });
          moreTools.append(toolSpan);
        }
      });
    });
    const autoNavMoreList = document.createElement("ul");
    autoNavMoreList.setAttribute("id", "autoNavMoreList");
    autoNavMoreList.style.setProperty("display", "none");
    autoNavMore.appendChild(autoNavMoreList);
    const moreToolsContainer = document.createElement("div");
    moreToolsContainer.setAttribute("id", "more-tools-container");
    const colors = document.createElement("div");
    colors.setAttribute("id", "more-tools-colors");
    moreToolsContainer.appendChild(colors);
    const moreTools = document.createElement("div");
    moreTools.setAttribute("id", "more-tools");
    moreToolsContainer.appendChild(moreTools);
    $("body").append(moreToolsContainer);
    const tools = document.getElementById("tools");
    tools.appendChild(autoNavMore);

    $("[id^=color_]").on("click", (event) => {
      const color = event.target.id.split("_")[1];
      Tools.setColor(`#${color}`);
    });
  };

  initializeAutoResizeToolbar();

  const autoNavMore = $("#autoNavMore");
  const autoNavMoreList = $("#autoNavMoreList");

  let prevToolCount = 9999;

  const changeAutoNavMore = () => {
    if ($("#board").is(":visible")) {
      $("#more-tools-container").hide();
      let childNumber = 2;

      const tools = $("#tools");

      const toolWidth = $(tools[0].children[0]).outerWidth();
      const toolCount = tools[0].children.length;
      const additionalFactor = 200;
      const boardWidth = $("#board").width();

      if (
        toolWidth * toolCount + additionalFactor > boardWidth &&
        tools[0].children.length > 1
      ) {
        // CODE FIRES WHEN WINDOW SIZE GOES DOWN
        tools
          .children(`li:nth-last-child(${childNumber})`)
          .prependTo(autoNavMoreList);
        prevToolCount = toolCount;
        changeAutoNavMore();
      } else {
        // CHECK IF ITEM HAS ENOUGH SPACE TO PLACE IN MENU
        if (
          toolWidth * (toolCount + 1) + additionalFactor < boardWidth &&
          prevToolCount !== toolCount &&
          prevToolCount - 1 <= toolCount
        ) {
          prevToolCount = toolCount;
          autoNavMoreList.children("li:first-child").insertBefore(autoNavMore);
          toolWidth * (toolCount + 2) + additionalFactor < boardWidth &&
            changeAutoNavMore();
        }
      }
      if (autoNavMoreList.children().length > 0) {
        autoNavMore.show();
        childNumber = 2;
      } else {
        autoNavMore.hide();
        childNumber = 1;
      }
      const colorPresetSel = $("#colorPresetSel");
      if (autoNavMore.is(":visible")) {
        const colors = $("#more-tools-colors");
        colors.empty();
        colorPresetSel.attr("style", "display: none !important");
        let colorPresetSelCopy = colorPresetSel.clone(true, true);
        colorPresetSelCopy.attr("id", "colorPresetSelCopy");
        colors.prepend(colorPresetSelCopy);
        colorPresetSelCopy.show();
      } else {
        colorPresetSel.attr("style", "display: block !important");
      }
    }
  };

  changeAutoNavMore();
  $(window).resize(changeAutoNavMore);
})();
