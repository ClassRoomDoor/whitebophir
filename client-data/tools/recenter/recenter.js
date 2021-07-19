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

(function () { //Code isolation
    const  defaultOrigin = {
        scrollX: document.documentElement.scrollLeft,
        scrollY: document.documentElement.scrollTop,
        x: 0.0,
        y: 0.0,
        clientY: 0,
        scale: 1.0
    };

    const defaultScale = 1;

    function zoom(origin, scale) {
        var oldScale = origin.scale;
        var newScale = Tools.setScale(scale);
        window.scrollTo(
            origin.scrollX + origin.x * (newScale - oldScale),
            origin.scrollY + origin.y * (newScale - oldScale)
        );
    }

    function onstart(evt)  {
        zoom(defaultOrigin, defaultScale);
    }

    var zoomTool = {
        "groupName": "Zoom",
        "name": "Recenter",
        "shortcut": "rr",
        "listeners": {},
        "oneTouch": true,
        "onstart": onstart,
        "mouseCursor": "zoom-in",
        "icon": "tools/recenter/icon.svg",
        "helpText": "click_to_zoom",
    };
    Tools.add(zoomTool);
})(); //End of code isolation
