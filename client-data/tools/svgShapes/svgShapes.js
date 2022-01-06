﻿/**
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
	//Indicates the id of the shape the user is currently drawing or an empty string while the user is not drawing
	var end = false,
		curId = "",
		curUpdate = { //The data of the message that will be sent for every new point
			'type': 'update',
			'id': "",
			'x': 0,
			'y': 0,
			'x2': 0,
			'y2': 0
		},
		lastTime = performance.now(); //The time at which the last point was drawn

	function start(x, y, evt) {

		//Prevent the press from being interpreted by the browser
		evt.preventDefault();

		curId = Tools.generateUID("r"); //"r" for rectangle

		Tools.drawAndSend({
			'type': 'rect',
			'id': curId,
			'color': Tools.getColor(),
			'size': Tools.getSize(),
			'opacity': Tools.getOpacity(),
			'x': x,
			'y': y,
			'x2': x,
			'y2': y
		});

		curUpdate.id = curId;
		curUpdate.x = x;
		curUpdate.y = y;
	}

	function move(x, y, evt) {
		/*Wait 70ms before adding any point to the currently drawing shape.
		This allows the animation to be smother*/
		if (curId !== "") {
			curUpdate['x2'] = x; curUpdate['y2'] = y;
			if (performance.now() - lastTime > 70 || end) {
				Tools.drawAndSend(curUpdate);
				lastTime = performance.now();
			} else {
				draw(curUpdate);
			}
		}
		if (evt) evt.preventDefault();
	}

	function stop(x, y) {
		//Add a last point to the shape
		end = true;
		move(x, y);
		end = false;
		curId = "";
	}

	function draw(data) {
		Tools.drawingEvent = true;
		switch (data.type) {
			case "rect":
				createShape(data);
				break;
			case "update":
				var shape = svg.getElementById(data['id']);
				if (!shape) {
					console.error("Straight shape: Hmmm... I received a point of a rect that has not been created (%s).", data['id']);
					createShape({ //create a new shape in order not to loose the points
						"id": data['id'],
						"x": data['x2'],
						"y": data['y2']
					});
					console.log('before switch2')

				}
				updateShape(shape, data);
				break;
			default:
				console.error("Straight shape: Draw instruction with unknown type. ", data);
				break;
		}
	}

	var svg = Tools.svg;

	function createShape(data) {
		let shapeGroup = Tools.createSVGElement("g");
		if (data.title) {
			let shapeTitle = Tools.createSVGElement("foreignObject");
			shapeTitle.setAttribute("class", "title");
			shapeTitle.id = `${data.id}Title`;
			shapeGroup.appendChild(shapeTitle);
		}
		if (data.formula) {
			let shapeFormula = Tools.createSVGElement("foreignObject");
			shapeFormula.setAttribute("class", "formula");
			shapeFormula.id = `${data.id}Formula`;
			shapeGroup.appendChild(shapeFormula);
		}

		let shape = Tools.createSVGElement("use");
		shape.id = `${data.id}Shape`;
		shapeGroup.id = data.id;

		shape.setAttribute("class", "shape");
		shape.setAttribute("href", `#${data.tool.toLowerCase()}`);

		shape.setAttribute("stroke", data.color || "black");
		shape.setAttribute("stroke-width", data.size || 10);
		shape.setAttribute(
			"opacity",
			Math.max(0.1, Math.min(1, data.opacity)) || 1
		);
		const shapeSymbol = document.getElementById(`${data.tool.toLowerCase()}`);
		const viewBox = shapeSymbol.getAttribute("viewBox").split(/\s+|,/);
		shape.setAttribute("viewBox", `${Number(viewBox[0]) - (data.size > 1 ? data.size : 0)} ${Number(viewBox[1]) - (data.size > 1 ? data.size : 0)} ${(Number(viewBox[2]) + (data.size > 1 ? data.size * 2 : 0))} ${Number(viewBox[3]) + (data.size > 1 ? data.size * 2 : 0)}`);
		shapeGroup.appendChild(shape);
		updateShape(shapeGroup, data);
		Tools.drawingArea.appendChild(shapeGroup);
		return shapeGroup;
	}

	function updateShape(shapeGroup, data) {
		if (shapeGroup) {
			const shape = shapeGroup.getElementsByClassName("shape")[0];
			const shapeTitle = shapeGroup.getElementsByClassName("title")[0];
			const shapeFormula = shapeGroup.getElementsByClassName("formula")[0];
			shape.x.baseVal.value = Math.min(data["x2"], data["x"]);
			shape.y.baseVal.value = Math.min(data["y2"], data["y"]);
			shape.width.baseVal.value = Math.abs(data["x2"] - data["x"]);
			shape.height.baseVal.value = Math.abs(data["y2"] - data["y"]);
			//adding shape title below the shape
			if (data.title) {
				shapeTitle.x.baseVal.value = Math.min(data["x2"], data["x"]);
				shapeTitle.y.baseVal.value = Math.min(data["y2"], data["y"]) + Math.abs(data["y2"] - data["y"] - 20);
				shapeTitle.width.baseVal.value = Math.abs(data["x2"] - data["x"]);
				shapeTitle.height.baseVal.value = shapeTitle.y.baseVal.value / 30 + 10;
				shapeTitle.style.fontSize = `${shapeTitle.y.baseVal.value / 30 + 5}px`
				shapeTitle.innerHTML = data.title;
			}
			//adding shape formula below the shape
			if (katex && data.formula) {
				shapeFormula.x.baseVal.value = Math.min(data["x2"], data["x"]);
				shapeFormula.y.baseVal.value = Math.min(data["y2"], data["y"]) + Math.abs(data["y2"] - data["y"] + 5);
				shapeFormula.width.baseVal.value = Math.abs(data["x2"] - data["x"]);
				shapeFormula.height.baseVal.value = shapeTitle.y.baseVal.value / 30 + 10;
				shapeFormula.style.fontSize = `${shapeTitle.y.baseVal.value / 30 + 5}px`
				katex.render(data.formula, shapeFormula, {
					throwOnError: false
				});
			}
		}
	}

	const shapes = [
		'pentagon', 'nonagon', 'line', 'rhombus', 'acute', 'ellipse',
		'right triangle', 'parallelogram', 'kite', "decagon", "scalene",
		"square", "isosceles", "trapezoid", "crescent", "hexagon", "obtuse",
		"star", "equilateral", "octagon", "rectangle", "heptagon", "trefoil",
		"heart", 'cube simple', "cube sq", 'cube rect', "rectangular prism rect", "hexagonal prism sq",
		"hexagonal prism rect", "cylinder", "cone", "triangular prism", "sphere",
		"hemisphere", "trapezoidal prism", "trapezoidal prism sm", "hexagonal pyramid",
		"octagonal pyramid", 'oblique square pyramid', 'square pyramid', 'octahedron',
		'octahedron sq', 'octahedron rect', 'icosahedron', 'circle parts', 'circumference',
		'circle area', 'arc length', 'circle sector',
		'acute angle', 'right angle', 'obtuse angle', 'straight angle', 'reflex angle',
		'basic triangle', 'triangle area', 'pythagorean triangle', 'sin cos tan', 'equilateral triangle',
		'isosceles triangle', 'scalene triangle', 'triangle right', 'acute triangle', 'obtuse triangle',
		'right one angle', 'acute each angle', 'obtuse one angle',
		'triangle equilateral sides', 'triangle isosceles sides', 'triangle scalene sides',
		'quadrilateral angles', 'quadrilateral perimeter', 'parallelogram area', 'trapezoid area', 'all equal sides', 'opposite sides equal',
		'parallel equal angles', 'two parallel equals', 'adjacent sides equal', 'one parallel pair', 'no parallel sides',
		'polygon tri', 'polygon sqr', 'polygon penta', 'polygon hexa', 'polygon octa', 'polygon deca',
		'sat circle area', 'sat rectangle area', 'sat triangle area', 'sat pythagorean triangle', 'special right triangle',
		'isosceles right triangle', 'cube volume', 'cylinder volume', 'sphere volume', 'cone volume', 'square cone volume'
	];

	shapes.forEach((shape) => {
		var newShape = {
			"groupName": "Shapes",
			"name": shape.charAt(0).toUpperCase() + shape.slice(1),
			"listeners": {
				"press": start,
				"move": move,
				"release": stop,
			},
			"draw": draw,

			"mouseCursor": "crosshair",
			"icon": `tools/svgShapes/${shape}.svg`,
			"stylesheet": "tools/svgShapes/svgShapes.css"
		};
		Tools.add(newShape);

	});

})(); //End of code isolation