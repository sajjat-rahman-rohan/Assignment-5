//  add click event handler with the blog button
document
  .getElementById("header-blog-btn")
  .addEventListener("click", function () {
    window.open("blog.html", "_blank");
  });

// all shape part
let serial = 0;

// first card
document
  .getElementById("triangle-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const triangleShapeName = document.getElementById(
      "triangle-shape-title"
    ).innerText;

    const triangleFirstInput = document.getElementById(
      "triangle-first-input-filed"
    ).value;
    const triangleSecondInput = document.getElementById(
      "triangle-second-input-filed"
    ).value;

    if (
      triangleFirstInput == "" ||
      triangleSecondInput == "" ||
      triangleFirstInput <= 0 ||
      triangleSecondInput <= 0 ||
      typeof triangleFirstInput !== "string" ||
      typeof triangleFirstInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const triangleTotalArea =
      0.5 * parseInt(triangleFirstInput) * parseInt(triangleSecondInput);
    const triangleToDecimal = triangleTotalArea.toFixed(2);

    // show displayData
    displayData(triangleShapeName, triangleToDecimal);
  });

// second card
document
  .getElementById("rectangle-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const rectangleShapeName = document.getElementById(
      "rectangle-shape-title"
    ).innerText;

    const rectangleFirstInput = document.getElementById(
      "rectangle-first-input-filed"
    ).value;
    const rectangleSecondInput = document.getElementById(
      "rectangle-second-input-filed"
    ).value;

    if (
      rectangleFirstInput == "" ||
      rectangleSecondInput == "" ||
      rectangleFirstInput <= 0 ||
      rectangleSecondInput <= 0 ||
      typeof rectangleFirstInput !== "string" ||
      typeof rectangleFirstInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const rectangleTotalArea =
      parseInt(rectangleFirstInput) * parseInt(rectangleSecondInput);
    const rectangleToDecimal = rectangleTotalArea.toFixed(2);

    // show displayData
    displayData(rectangleShapeName, rectangleToDecimal);
  });

// third card
document.getElementById("pera-card-btn").addEventListener("click", function () {
  //   get the data from html using id

  serial += 1;

  const peraShapeName = document.getElementById("pera-shape-title").innerText;

  const peraFirstInput = document.getElementById(
    "pera-first-input-field"
  ).value;
  const peraSecondInput = document.getElementById(
    "pera-second-input-field"
  ).value;

  if (
    peraFirstInput == "" ||
    peraSecondInput == "" ||
    peraFirstInput <= 0 ||
    peraSecondInput <= 0 ||
    typeof peraFirstInput !== "string" ||
    typeof peraSecondInput !== "string"
  ) {
    return alert("please enter any valid number");
  }

  const peraTotalArea = parseInt(peraFirstInput) * parseInt(peraSecondInput);
  const peraToDecimal = peraTotalArea.toFixed(2);

  // show displayData
  displayData(peraShapeName, peraToDecimal);
});

// fourth card
document
  .getElementById("rhombus-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const shape = getData(
      "rhombus-shape-title",
      "rhombus-first-input-field",
      "rhombus-second-input-field"
    );

    if (
      shape.firstInput == "" ||
      shape.secondInput == "" ||
      shape.firstInput <= 0 ||
      shape.secondInput <= 0 ||
      typeof shape.firstInput !== "string" ||
      typeof shape.secondInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const rhombusTotalArea =
      0.5 * parseInt(shape.firstInput) * parseInt(shape.secondInput);
    const rhombusToDecimal = rhombusTotalArea.toFixed(2);

    // show displayData
    displayData(shape.shapeName, rhombusToDecimal);
  });

// fiveth card
document
  .getElementById("pentagon-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const shape = getData(
      "pentagon-shape-title",
      "pentagon-first-input-field",
      "pentagon-second-input-field"
    );

    if (
      shape.firstInput == "" ||
      shape.secondInput == "" ||
      shape.firstInput <= 0 ||
      shape.secondInput <= 0 ||
      typeof shape.firstInput !== "string" ||
      typeof shape.secondInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const pentagonTotalArea =
      0.5 * parseInt(shape.firstInput) * parseInt(shape.secondInput);
    const pentagonToDecimal = pentagonTotalArea.toFixed(2);

    // show displayData
    displayData(shape.shapeName, pentagonToDecimal);
  });

// sixth card
document
  .getElementById("ellipse-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const shape = getData(
      "ellipse-shape-title",
      "ellipse-first-input-field",
      "ellipse-second-input-field"
    );

    if (
      shape.firstInput == "" ||
      shape.secondInput == "" ||
      shape.firstInput <= 0 ||
      shape.secondInput <= 0 ||
      typeof shape.firstInput !== "string" ||
      typeof shape.secondInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const ellipseTotalArea =
      Math.PI * parseInt(shape.firstInput) * parseInt(shape.secondInput);
    const ellipseToDecimal = ellipseTotalArea.toFixed(2);

    // show displayData
    displayData(shape.shapeName, ellipseToDecimal);
  });

// area card
document.getElementById("shape-box").addEventListener("mouseover", function () {
  const shapeBox = document.getElementById("shape-box");
  shapeBox.style.background = randomColor();
});

// first card
document
  .getElementById("shape-box-1")
  .addEventListener("mouseover", function () {
    const shapeBox = document.getElementById("shape-box-1");
    shapeBox.style.background = randomColor();
  });

// second card
document
  .getElementById("shape-box-2")
  .addEventListener("mouseover", function () {
    const shapeBox = document.getElementById("shape-box-2");
    shapeBox.style.background = randomColor();
  });

// third card
document
  .getElementById("shape-box-3")
  .addEventListener("mouseover", function () {
    const shapeBox = document.getElementById("shape-box-3");
    shapeBox.style.background = randomColor();
  });

// fourth card
document
  .getElementById("shape-box-4")
  .addEventListener("mouseover", function () {
    const shapeBox = document.getElementById("shape-box-4");
    shapeBox.style.background = randomColor();
  });

// fiveth card
document
  .getElementById("shape-box-5")
  .addEventListener("mouseover", function () {
    const shapeBox = document.getElementById("shape-box-5");
    shapeBox.style.background = randomColor();
  });

// sixth card
document
  .getElementById("shape-box-6")
  .addEventListener("mouseover", function () {
    const shapeBox = document.getElementById("shape-box-6");
    shapeBox.style.background = randomColor();
  });
