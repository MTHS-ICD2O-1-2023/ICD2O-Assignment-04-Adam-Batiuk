// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

window.oninput = function () {
  // input
  const bun = document.getElementById("gluten-free-bun").checked
  const patty = document.getElementById("vegan-patty").checked
  const lettuce = document.getElementById("yes-lettuce").checked
  const tomato = document.getElementById("yes-tomato").checked
  const bacon = document.getElementById("yes-bacon").checked
  const ketchup = document.getElementById("yes-ketchup").checked
  const mustard = document.getElementById("yes-mustard").checked

  // define price
  const burgerBasePrice = 4.00
  let burgerPrice = burgerBasePrice

  // change price
  if (bun == true) {
    burgerPrice = burgerPrice + 0.50
  }
  if (patty == true) {
    burgerPrice = burgerPrice + 0.50
  }
  if (lettuce == true) {
    burgerPrice = burgerPrice + 0.25
  }
  if (tomato == true) {
    burgerPrice = burgerPrice + 0.25
  }
  if (bacon == true) {
    burgerPrice = burgerPrice + 0.25
  }
  if (ketchup == true) {
    burgerPrice = burgerPrice + 0.25
  }
  if (mustard == true) {
    burgerPrice = burgerPrice + 0.25
  }
  // output
  document.getElementById("answer").innerHTML = "Price: $" + burgerPrice.toFixed(2)
}
