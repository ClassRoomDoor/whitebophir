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
  let lastWidth = 999999;

  const changeAutoNavMore = () => {
    if ($("#board").is(":visible")) {
      $("#more-tools").hide();
      let childNumber = 2;

      const tools = $("#tools");
      const autoNavWidth = tools.width();
      console.log(`Child width: ${$(tools[0].children[0]).outerWidth()}`);
      console.log(`No of children: ${tools[0].children.length}`);
      console.log(
        `Total with: ${
          $(tools[0].children[0]).outerWidth() * tools[0].children.length + 200
        }`
      );
      console.log(`Last with: ${lastWidth}`);
      console.log(`Board width: ${$("#board").width()}`);

      if (
        $(tools[0].children[0]).outerWidth() * tools[0].children.length + 200 >
        $("#board").width()
      ) {
        console.log("if");
        // CODE FIRES WHEN WINDOW SIZE GOES DOWN
        tools
          .children(`li:nth-last-child(${childNumber})`)
          .prependTo(autoNavMoreList);
        lastWidth = autoNavWidth;
        changeAutoNavMore();
      } else {
        // CODE FIRES WHEN WINDOW SIZE GOES UP
        const autoNavMoreFirst = autoNavMoreList
          .children("li:first-child")
          .width();

        // CHECK IF ITEM HAS ENOUGH SPACE TO PLACE IN MENU
        if (tools.width() + autoNavMoreFirst > lastWidth) {
          console.log("else if");
          autoNavMoreList.children("li:first-child").insertBefore(autoNavMore);
          lastWidth = lastWidth + autoNavMoreFirst;
          autoNavWidth + autoNavMoreFirst > lastWidth && changeAutoNavMore();
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
