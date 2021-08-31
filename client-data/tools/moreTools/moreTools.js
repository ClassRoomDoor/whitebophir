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
      $("#more-tools").empty();
      $("#more-tools").toggle();
      $("#autoNavMoreList > li").each(function () {
        // use $(this) as an li
        const toolTitle = document.createElement("p");
        toolTitle.innerText = $(this).children(".tool-name").text();
        $("#more-tools").append(toolTitle);
        const subTools = $(this).children(".sub-tools").first().clone();
        if (subTools.children().length) {
          subTools.children().each(function (index) {
            $(this).on("click", () => {
              const toolName = $(this).attr("id").split("-")[1];
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
                $("#more-tools").hide();
              }
            });
          });
          $("#more-tools").append(subTools);
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
            $("#more-tools").hide();
          });
          $("#more-tools").append(toolSpan);
        }
      });
    });
    const autoNavMoreList = document.createElement("ul");
    autoNavMoreList.setAttribute("id", "autoNavMoreList");
    autoNavMoreList.style.setProperty("display", "none");
    autoNavMore.appendChild(autoNavMoreList);
    const span = document.createElement("span");
    span.setAttribute("id", "more-tools");
    $("body").append(span);
    const tools = document.getElementById("tools");
    tools.appendChild(autoNavMore);
  };

  initializeAutoResizeToolbar();

  const autoNavMore = $("#autoNavMore");
  const autoNavMoreList = $("#autoNavMoreList");

  let prevToolCount = 9999;

  const changeAutoNavMore = () => {
    if ($("#board").is(":visible")) {
      $("#more-tools").hide();
      let childNumber = 2;

      const tools = $("#tools");

      const toolWidth = $(tools[0].children[0]).outerWidth();
      const toolCount = tools[0].children.length;
      const additionalFactor = 200;
      const boardWidth = $("#board").width();
      console.log(
        `${toolWidth} * ${toolCount} + ${additionalFactor} = ${
          toolWidth * toolCount + additionalFactor
        }`,
        boardWidth
      );

      console.log(prevToolCount, toolCount);

      if (
        toolWidth * toolCount + additionalFactor > boardWidth &&
        tools[0].children.length > 1
      ) {
        console.log("if");
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
          console.log("else if");
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
    }
  };

  changeAutoNavMore();
  $(window).resize(changeAutoNavMore);
})();
