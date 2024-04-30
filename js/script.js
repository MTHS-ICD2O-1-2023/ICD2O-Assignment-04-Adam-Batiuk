// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  // Define the lengths of the three sides of a triangle
  const sidea = parseInt(document.getElementById("side-a").value)
  const sideb = parseInt(document.getElementById("side-b").value)
  const sidec = parseInt(document.getElementById("side-c").value)

  //Calculate the semi-perimeter of the triangle
  const s = (sidea + sideb + sidec) / 2

  // Use Heron's formula to calculate the area of the triangle
  const area = Math.sqrt(s * ((s - sidea) * (s - sideb) * (s - sidec)))
  const roundArea = Math.round(area * 100) / 100
  const perimeter = s * 2

  if($area !== $area) {
    document.getElementById("answer").innerHTML = "Area is not a number"
}
else {
    document.getElementById("answer").innerHTML = "Area is: " + roundArea + " cm²"
}
document.getElementById("perimeter").innerHTML = "Perimeter is: " + perimeter + " cm"
}