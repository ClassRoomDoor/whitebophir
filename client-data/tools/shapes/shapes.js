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
    const searchCategory =
      `<div class="search-shape-container">
      <input type="text" id="searchInput" class="shapesSearchInput" autocomplete="off"  placeholder="Search category,title or names">
      <img class="searchIcon" src='../../SvgIcons/search.svg'>
    </div> `
    const toggleBtn = `<div class="shape-toggle-btn">
    <label class="toggle-shape-title">
      <input type="checkbox" id="showShapeName" class="showShapeDetails" checked=${Tools.showShapeDetails}>
          <div class="slider-shape round" >
          <span class="on">ON</span>
          <span class="off">OFF</span>
          </div>
      </label>
      <p id="shape-text">Show shape names</p>
  </div>`


    // let toggleBtn=document.createElement("div")
    return [
      {
        toggleBtn: searchCategory + toggleBtn
      },
      //shapes
      {
        category: "One dimensional shapes",
        tools: [
          {
            toolName: "Line",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/line.svg",
            title: "Line"
          },
          {
            toolName: "Circle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/circle.svg",
            title: "Circle"
          },
          {
            toolName: "Nonagon",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/nonagon.svg",
            title: "Nonagon"
          },

          {
            toolName: "Rhombus",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/rhombus.svg",
            title: "Rhombus"
          },
          {
            toolName: "Acute",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/acute.svg",
            title: "Acute"
          },
          {
            toolName: "Ellipse",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/ellipse.svg",
            title: "Ellipse"
          },
          {
            toolName: "Right triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/right-triangle.svg",
            title: "Right triangle"
          },
          {
            toolName: "Parallelogram",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/parallelogram.svg",
            title: "Parallelogram"
          },
          {
            toolName: "Kite",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/kite.svg",
            title: "Kite"
          },
          {
            toolName: "Decagon",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/decagon.svg",
            title: "Decagon"
          },
          {
            toolName: "Scalene",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/scalene.svg",
            title: "Scalene"
          },
          {
            toolName: "Square",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/square.svg",
            title: "Square"
          },
          {
            toolName: "Pentagon",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/pentagon.svg",
            title: "Pentagon"
          },
          {
            toolName: "Isosceles",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/isosceles.svg",
            title: "Isosceles"
          },
          {
            toolName: "Trapezoid",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/trapezoid.svg",
            title: "Trapezoid"
          },
          {
            toolName: "Crescent",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/crescent.svg",
            title: "Crescent"
          },
          {
            toolName: "Hexagon",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/hexagon.svg",
            title: "Hexagon"
          },
          {
            toolName: "Obtuse",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/obtuse.svg",
            title: "Obtuse"
          },
          {
            toolName: "Star",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/star.svg",
            title: "Star"
          },
          {
            toolName: "Equilateral",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/equilateral.svg",
            title: "Equilateral"
          },
          {
            toolName: "Octagon",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/octagon.svg",
            title: "Octagon"
          },
          {
            toolName: "Rectangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/rectangle.svg",
            title: "Rectangle"
          },
          {
            toolName: "Heptagon",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/heptagon.svg",
            title: "Heptagon"
          },
          {
            toolName: "Trefoil",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/trefoil.svg",
            title: "Trefoil"
          },
          {
            toolName: "Heart",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/shapes/heart.svg",
            title: "Heart"
          },
        ]

      },

      // 3D-shapes
      {
        category: "3D Shapes",
        tools: [
          {
            toolName: "Cube simple",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/cube-simple.svg",
            title: "Cube"
          },
          {
            toolName: "Cube sq",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/cube-sq.svg",
            title: "Cube"
          },
          {
            toolName: "Cube rect",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/cube-rect.svg",
            title: "Rectangular Prism"
          },
          {
            toolName: "Rectangular prism rect",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/rectangular-prism-rect.svg",
            title: "Rectangular Prism"
          },
          {
            toolName: "Hexagonal prism sq",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/hexagonal-prism-sq.svg",
            title: "Hexagonal Prism"
          },
          {
            toolName: "Hexagonal prism rect",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/hexagonal-prism-rect.svg",
            title: "Hexagonal Prism"
          },
          {
            toolName: "Cylinder",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/cylinder.svg",
            title: "Cylinder"
          },
          {
            toolName: "Cone",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/cone.svg",
            title: "Cone"
          },
          {
            toolName: "Triangular prism",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/triangular-prism.svg",
            title: "Triangular Prism"
          },
          {
            toolName: "Sphere",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/sphere.svg",
            title: "Sphere"
          },
          {
            toolName: "Hemisphere",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/hemisphere.svg",
            title: "Hemisphere"
          },
          {
            toolName: "Trapezoidal prism",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/trapezoidal-prism.svg",
            title: "Trapezoidal Prism"
          },
          {
            toolName: "Trapezoidal prism sm",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/trapezoidal-prism-sm.svg",
            title: "Trapezoidal Prism"
          },
          {
            toolName: "Hexagonal pyramid",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/hexagonal-pyramid.svg",
            title: "Hexagonal Pyramid"
          },
          {
            toolName: "Octagonal pyramid",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/octagonal-pyramid.svg",
            title: "Octagonal Pyramid"
          },
          {
            toolName: "Oblique Square Pyramid",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/oblique_square_pyramid.svg",
            title: "Oblique Square Pyramid"
          },
          {
            toolName: "Square pyramid",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/square_pyramid.svg",
            title: "Square Pyramid"
          },
          {
            toolName: "Octahedron",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/octahedron.svg",
            title: "Octahedron"
          },
          {
            toolName: "Octahedron sq",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/octahedron_sq.svg",
            title: "Octahedron"
          },
          {
            toolName: "Octahedron rect",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/octahedron_rect.svg",
            title: "Octahedron"
          },
          {
            toolName: "Icosahedron",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/3d_shapes/Icosahedron.svg",
            title: "Icosahedron"
          },
        ]
      },

      //Circles
      {
        category: "Circles",
        tools: [
          {
            toolName: "Circle parts",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/circles/circle-parts.svg",
            title: "Parts of a circle"
          },
          {
            toolName: "Circumference",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/circles/circumference.svg",
            title: "Circumference",
            formula:['C=2πr or πd']
          },
          {
            toolName: "Circle area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/circles/circle-area.svg",
            title: "Area of a circle",
            formula:['A=πr']
          },
          {
            toolName: "Arc length",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/circles/arc-length.svg",
            title: "Arc Length",
            formula:['S=π','S=2r(π/360°)']
          },
          {
            toolName: "Circle sector",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/circles/sector.svg",
            title: "Area of a Sector",
            formula:['Asector=\\dfrac{1}{2}r^2','Asector=r^2(π/360°)']
          },
        ]
      },

      //Basic Angles
      {
        category: "Basic Angles",
        tools: [
          {
            toolName: "Acute angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/acute-angle.svg",
            title: "Acute Angle < 90°"
          },
          {
            toolName: "Right angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/right-angle.svg",
            title: "Right Angle = 90°"
          },
          {
            toolName: "Obtuse angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/obtuse-angle.svg",
            title: "Obtuse Angle > 90° and < 180°"
          },
          {
            toolName: "Straight angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/straight-line.svg",
            title: "Straight line = 180°"
          },
          {
            toolName: "Reflex angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/reflex-angle.svg",
            title: "Reflex Angle > 180°"
          },
        ]
      },

      //Triangles
      {
        category: "Triangles",
        tools: [
          {
            toolName: "Basic triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/basic-triangle.svg",
            formula: ["a+b+c = 180°"]
          },
          {
            toolName: "Triangle area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/triangle-area.svg",
            formula: ["A=\\dfrac{1}{2}bh"]
          },
          {
            toolName: "Pythagorean triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/pythagorean-triangle.svg",
            title: "Pythagorean T.",
            formula: ["a^2+b^2=c^2"]
          },
          {
            toolName: "Sin cos tan",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/sin-cos-tan.svg",
            formula: ['sinθ=\\dfrac{o}{h}', 'cosθ=\\dfrac{a}{h}', 'tanθ=\\dfrac{a}{o}']
          },
          {
            toolName: "Equilateral triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/equilateral-triangle.svg",
            title: "Equilateral Triangle <br>All sides equal;<br>interior angles 60°"
          },
          {
            toolName: "Isosceles triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/isosceles-triangle.svg",
            title: "Isosceles Triangle<br>2 sides equal;<br>2 congruent angles"
          },
          {
            toolName: "Scalene triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/scalene-triangle.svg",
            title: "Scalene Triangle<br>No sides or angles<br>are equal"
          },
          {
            toolName: "Triangle right",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/right-triangle.svg",
            title: "Right Triangle<br>1 right angle"
          },
          {
            toolName: "Acute triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/acute-triangle.svg",
            title: "Acute Triangle<br>All angles acute"
          },
          {
            toolName: "Obtuse triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/obtuse-triangle.svg",
            title: "Obtuse Triangle<br>1 obtuse angle"
          },
        ]
      },

      // Triangles based on angles
      {
        category: "Triangles based on angles",
        tools: [
          {
            toolName: "Right one angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-angles/right.svg",
            title: "Right<br>One angle is = 90°"
          },
          {
            toolName: "Acute each angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-angles/acute.svg",
            title: "Acute<br>Each angle is < 90°"
          },
          {
            toolName: "Obtuse one angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-angles/obtuse.svg",
            title: "Obtuse<br>One angle is 90°"
          },
        ]
      },

      // Triangles based on sides
      {
        category: "Triangles based on sides",
        tools: [
          {
            toolName: "Triangle equilateral sides",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-sides/equilateral.svg",
            title: "Equilateral",
            subtitle: 'Length of all sides are equal'
          },
          {
            toolName: "Triangle isosceles sides",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-sides/isosceles.svg",
            title: "Isosceles",
            subtitle: 'Length of two sides are equal'
          },
          {
            toolName: "Triangle scalene sides",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-sides/scalene.svg",
            title: "Scalene",
            subtitle: 'Length of all sides are different'
          },
        ]
      },

      // quadrilaterals
      {
        category: "Quadrilateral",
        tools: [
          {
            toolName: "Quadrilateral angles",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/quadrilateral-angles.svg",
            title: "Quadrilateral Angles",
            formula: ['a + b + c + d = 360°']
          },
          {
            toolName: "Quadrilateral perimeter",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/perimeter.svg",
            formula: ['A=bh', 'Perimeter = 2b + 2h']
          },
          {
            toolName: "Parallelogram area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/parallelogram-area.svg",
            title: "Parallelogram Area",
            formula: ['A = bh']
          },
          {
            toolName: "Trapezoid area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/trapezoid-area.svg",
            title: "Trapezoid Area",
            formula: ['A = \\dfrac{1}{2}( b1 + b2 )h']
          },
          {
            toolName: "All equal sides",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/all-equals.svg",
            title: 'All sides equal;',
            subtitle: 'All angles 90°'
          },
          {
            toolName: "Opposite sides equal",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/opposite-equals.svg",
            title: 'Opposite sides equal;',
            subtitle: 'All angles 90°'
          },
          {
            toolName: "Parallel equal angles",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/parallel-equal-angles.svg",
            title: 'All sides equal;<br>2 pairs of parallel lines<br>opposite angles equal',
          },
          {
            toolName: "Two parallel equals",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/two-parallel-equals.svg",
            title: 'Opposite sides equal;<br>2 pairs of parallel lines',
          },
          {
            toolName: "Adjacent sides equal",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/adjacent-equals.svg",
            title: 'Adjacent sides equal;',
            subtitle: '2 congruent angles'
          },
          {
            toolName: "One parallel pair",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/one-parallel-pair.svg",
            title: '1 pair of<br>parallel sides',
          },
          {
            toolName: "No parallel sides",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/quadrilateral/no-parallel-pair.svg",
            title: 'No pair of<br>parallel sides'
          },
        ]
      },

      // regular polygon
      {
        category: "Regular Polygon",
        tools: [
          {
            toolName: "Polygon tri",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/regular-polygons/regular-triangle.svg",
            title: 'Equilateral Triangle',
            subtitle: '3 sides,60° angles'
          },
          {
            toolName: "Polygon sqr",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/regular-polygons/regular-square.svg",
            title: 'Square',
            subtitle: '4 sides,90° angles'
          },
          {
            toolName: "Polygon penta",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/regular-polygons/regular-pentagon.svg",
            title: 'Equilateral Pentagon',
            subtitle: '5 sides,108° angles'
          },
          {
            toolName: "Polygon hexa",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/regular-polygons/regular-hexagon.svg",
            title: 'Regular Hexagon',
            subtitle: '6 sides,120° angles'
          },
          {
            toolName: "Polygon octa",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/regular-polygons/regular-octagon.svg",
            title: 'Regular Octagon',
            subtitle: '5 sides,135° angles'
          },
          {
            toolName: "Polygon deca",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/regular-polygons/regular-decagon.svg",
            title: 'Regular Decagon',
            subtitle: '10 sides,144° angles'
          },
        ]
      },

      // Sat Algebra
      {
        category: "SAT Algebra and Geometry Essentials",
        tools: [
          {
            toolName: "Sat circle area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/area-of-circle.svg",
            formula: ['A=πr^2', 'C=2πr']
          },
          {
            toolName: "Sat rectangle area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/area-of-rectangle.svg",
            formula: ['A = lw'],
          },
          {
            toolName: "Sat triangle area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/area-of-triangle.svg",
            formula: ['A = (\\dfrac{1}{2})bh'],
          },
          {
            toolName: "Sat pythagorean triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/area-right-triangle.svg",
            formula: ['c^2= a^2 + b^2'],
          },
          {
            toolName: "Special right triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/special-right-triangle.svg",
            title: 'Special Right Triangles',
          },
          {
            toolName: "Isosceles right triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/isosceles-right-triangle.svg",
            title: 'Special Right Triangles',
          },
          {
            toolName: "Cube volume",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/volume-of-cube.svg",
            formula: ['V = lwh'],
          },
          {
            toolName: "Cylinder volume",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/volume-of-cylinder.svg",
            formula: ['V = πr^2h'],
          },
          {
            toolName: "Sphere volume",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/volume-of-sphere.svg",
            formula: ['V = (\\dfrac{4}{3})πr^3h'],
          },
          {
            toolName: "Cone volume",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/volume-of-cone.svg",
            formula: ['V = (\\dfrac{1}{3})πr^3h'],
          },
          {
            toolName: "Square cone volume",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/sat-algebra/volume-of-square-cone.svg",
            formula: ['V = (\\dfrac{1}{3})lwh'],
          },
        ]
      },
    ];
  }

  function start() {
    console.log("I am started", Tools.currentSubTool, Tools.currentGroup);
    if (Tools.curTool.name === Tools.currentGroup && Tools.currentSubTool) {
      Tools.change(Tools.currentSubTool);
    } else {
      Tools.change("Line");
    }
  }

  $(document.body).on('click', '.showShapeDetails', function () {
    $('.showShapeDetails').not(this).prop('checked', this.checked);
  });

  $(document.body).on('keyup', '.shapesSearchInput', function () {
    $('.shapesSearchInput').not(this).val(this.value);
    search();
  });

  function search() {
    const searchString = $('.shapesSearchInput')[0].value.toLowerCase();
    $('.sub-tool-category').each((index1, elem) => {
      const className = $(elem).attr('class').replace('sub-tool-category', '').trim();
      if (!className) {
        return;
      }
      if ($(elem).text().toLowerCase().includes(searchString.toLowerCase())) {
        $(`.${className}`).show();
      } else {
        let hasChild = false;
        $(`.${className}`).each((index2, tool) => {
          if (!$(tool).hasClass('sub-tool-container')) {
            return;
          }
          const toolName = $(tool).find('.sub-tool-name').text();
          if (toolName.toLowerCase().includes(searchString.toLowerCase())) {
            hasChild = true;
            $(tool).show();
          } else {
            $(tool).hide();
          }

        })
        if (!hasChild) {
          $(`.${className}`).hide();
        }
      }
    })

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
