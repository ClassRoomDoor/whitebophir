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
      //shapes
      {
        category: "One dimensional shapes"
      },
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
        toolName: "Right",
        path: "tools/svgShapes/svgShapes.js",
        icon: "tools/svgShapes/shapes/right-triangle.svg",
        title: "Right"
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
      {
        category: "3D Shapes"
      },
        // 3D-shapes
        {
          toolName: "Cube sq",
          path: "tools/svgShapes/svgShapes.js",
          icon: "tools/svgShapes/3d_shapes/cube-sq.svg",
          title: "Cube"
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
        //Basic Angles
        {
          category: "Circles"
        },
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
          title: "Circumference"
        },
        {
          toolName: "Circle area",
          path: "tools/svgShapes/svgShapes.js",
          icon: "tools/svgShapes/circles/circle-area.svg",
          title: "Area of a circle"
        },
        {
          toolName: "Arc length",
          path: "tools/svgShapes/svgShapes.js",
          icon: "tools/svgShapes/circles/arc-length.svg",
          title: "Arc length"
        },
        {
          toolName: "Circle sector",
          path: "tools/svgShapes/svgShapes.js",
          icon: "tools/svgShapes/circles/sector.svg",
          title: "Area of a sector"
        },
          //Basic Angles
          {
            category: "Basic Angles"
          },
          {
            toolName: "Acute angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/acute-angle.svg",
            title: "Acute angle < 90^"
          },
          {
            toolName: "Right angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/right-angle.svg",
            title: "Right angle = 90^"
          },
          {
            toolName: "Obtuse angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/obtuse-angle.svg",
            title: "Obtuse angle > 90^ and < 180^"
          },
          {
            toolName: "Straight angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/straight-line.svg",
            title: "Straight line = 180^"
          },
          {
            toolName: "Reflex angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/basic_angles/reflex-angle.svg",
            title: "Reflex angle > 180^"
          },
           //Triangles
           {
            category: "Triangles"
          },
          {
            toolName: "Basic triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/basic-triangle.svg",
            title: "a+b+c = 180^"
          },
          {
            toolName: "Triangle area",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/triangle-area.svg",
            title: "A=1/2bh"
          },
          {
            toolName: "Pythagorean triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/pythagorean-triangle.svg",
            title: "Pythagorean triangle"
          },
          {
            toolName: "Sin cos tan",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/sin-cos-tan.svg",
            title: "Sin=o/h cos=a/h tan=a/o"
          },
          {
            toolName: "Equilateral triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/equilateral-triangle.svg",
            title: "Equilateral Triangle "
          },
          {
            toolName: "Isosceles triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/isosceles-triangle.svg",
            title: "Isosceles Triangle"
          },
          {
            toolName: "Scalene triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/scalene-triangle.svg",
            title: "Scalene Triangle"
          },
          {
            toolName: "Triangle right",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/right-triangle.svg",
            title: "Right Triangle"
          },
          {
            toolName: "Acute triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/acute-triangle.svg",
            title: "Acute Triangle"
          },
          {
            toolName: "Obtuse triangle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles/obtuse-triangle.svg",
            title: "Obtuse Triangle"
          },
          // Triangles based on angles
          {
            category: "Triangles based on angles"
          },
          {
            toolName: "Right one angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-angles/right.svg",
            title: "Right One angle"
          },
          {
            toolName: "Acute each angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-angles/acute.svg",
            title: "Acute Each angle"
          },
          {
            toolName: "Obtuse one angle",
            path: "tools/svgShapes/svgShapes.js",
            icon: "tools/svgShapes/triangles-angles/obtuse.svg",
            title: "Obtuse One angle"
          },
          // Triangles based on sides
          {
            category: "Triangles based on sides"
          }



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
