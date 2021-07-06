/**
 *                        WHITEBOPHIR
 *********************************************************
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2013  Ophir LOJKINE
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend
 *
 */

(function () {
  function draw(data) {
    switch (data.type) {
      case "new":
        createImage(data);
        break;
      default:
        console.error("Text: Draw instruction with unknown type. ", data);
        break;
    }
  }

  function createImage(fieldData) {
    const elem = Tools.createSVGElement("image", {
      id: fieldData.id,
      href: "data:image/png;base64, " + fieldData.data,
    });
    Tools.drawingArea.appendChild(elem);
    return elem;
  }

  function search() {
    Tools.isCurrentToolBusy = true;
    const queryInput = document.getElementById("wolfram-input");
    queryInput.setAttribute("disabled", true);
    const searchQuery = document.getElementById("wolfram-input").value;
    Tools.message.innerText = "Searching...";
    fetch("https://us-central1-classroom-door.cloudfunctions.net/wolfram1", {
      method: "POST",
      body: searchQuery,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.successType === "SHOW_MESSAGE") {
          Tools.message.innerText = "No Result Found";
          setTimeout(() => {
            Tools.message.innerText = "";
          }, 2000);
        } else {
          const newImage = {
            data: data.data,
            type: "new",
            searchQuery: searchQuery,
            x: 0,
            y: 0,
            id: searchQuery.split(" ").join("_") + "_image",
          };
          Tools.drawAndSend(newImage);
          Tools.message.innerText = "";
        }
      })
      .finally(() => {
        Tools.isCurrentToolBusy = false;
        queryInput.value = "";
        queryInput.removeAttribute("disabled");
      });
  }

  function getInput() {
    const x = document.createElement("INPUT");
    x.id = "wolfram-input";
    x.setAttribute("type", "text");
    x.setAttribute("placeholder", "type here to search");
    x.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        search();
      }
    });
    return x;
  }

  Tools.add({
    //The new tool
    name: "Wolfram",
    shortcut: "s",
    element: getInput(),
    draw: draw,
    stylesheet: "tools/text/text.css",
    icon: "tools/wolfram/icon.svg",
    mouseCursor: "text",
  });
})(); //End of code isolation