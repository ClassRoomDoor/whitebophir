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
 */

(function () {
  function getChildren() {
    return [
      {
        toolName: "Line",
        path: "tools/line/line.js",
        icon: "tools/line/icon.svg",
      },
      {
        toolName: "Straight line",
        path: "tools/straightLine/Line.js",
        icon: "tools/straightLine/icon.svg",
      },
      {
        toolName: "Rectangle",
        path: "tools/rect/rect.js",
        icon: "tools/rect/icon.svg",
      },
      {
        toolName: "Square",
        path: "tools/square/square.js",
        icon: "tools/square/icon.svg",
      },
      {
        toolName: "Ellipse",
        path: "tools/ellipse/ellipse.js",
        icon: "tools/ellipse/icon.svg",
      },
      {
        toolName: "Circle",
        path: "tools/circle/circle.js",
        icon: "tools/circle/icon.svg",
      },
    ];
  }

  function start() {
    console.log("I am started", Tools.currentSubTool, Tools.currentGroup);
    if(Tools.curTool.name === Tools.currentGroup && Tools.currentSubTool){
      Tools.change(Tools.currentSubTool);
    } else {
      Tools.change("Line");
    }
  }

  var groupTool = {
    name: "Shapes",
    type: "group",
    shortcut: "gt",
    listeners: {
      press: start
    },
    children: getChildren(),
    mouseCursor: "crosshair",
    icon: "tools/shapes/icon.svg",
    stylesheet: "tools/rect/rect.css",
  };
  Tools.add(groupTool);
})(); //End of code isolation
