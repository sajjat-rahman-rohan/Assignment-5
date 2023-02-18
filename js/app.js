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

    // if (
    //   triangleFirstInput == "" ||
    //   triangleSecondInput == "" ||
    //   triangleFirstInput <= 0 ||
    //   triangleSecondInput <= 0 ||
    //   typeof triangleFirstInput !== "string" ||
    //   typeof triangleFirstInput !== "string"
    // ) {
    //   return alert("please enter any valid number");
    // }

    const triangleTotalArea =
      0.5 * parseInt(triangleFirstInput) * parseInt(triangleSecondInput);

    // show displayData
    displayData(triangleShapeName, triangleTotalArea);
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

    // show displayData
    displayData(rectangleShapeName, rectangleTotalArea);
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

  // show displayData
  displayData(peraShapeName, peraTotalArea);
});

// fourth card
document
  .getElementById("rhombus-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const rhombusShapeName = document.getElementById(
      "rhombus-shape-title"
    ).innerText;

    const rhombusFirstInput = document.getElementById(
      "rhombus-first-input-field"
    ).value;
    const rhombusSecondInput = document.getElementById(
      "rhombus-second-input-field"
    ).value;

    if (
      rhombusFirstInput == "" ||
      rhombusSecondInput == "" ||
      rhombusFirstInput <= 0 ||
      rhombusSecondInput <= 0 ||
      typeof rhombusFirstInput !== "string" ||
      typeof rhombusSecondInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const rhombusTotalArea =
      0.5 * parseInt(rhombusFirstInput) * parseInt(rhombusSecondInput);

    // show displayData
    displayData(rhombusShapeName, rhombusTotalArea);
  });

// fiveth card
document
  .getElementById("pentagon-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const pentagonShapeName = document.getElementById(
      "rhombus-shape-title"
    ).innerText;

    const pentagonFirstInput = document.getElementById(
      "pentagon-first-input-field"
    ).value;
    const pentagonSecondInput = document.getElementById(
      "pentagon-second-input-field"
    ).value;

    if (
      pentagonFirstInput == "" ||
      pentagonSecondInput == "" ||
      pentagonFirstInput <= 0 ||
      pentagonSecondInput <= 0 ||
      typeof pentagonFirstInput !== "string" ||
      typeof pentagonSecondInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const pentagonTotalArea =
      0.5 * parseInt(pentagonFirstInput) * parseInt(pentagonSecondInput);

    // show displayData
    displayData(pentagonShapeName, pentagonTotalArea);
  });

// sixth card

document
  .getElementById("ellipse-card-btn")
  .addEventListener("click", function () {
    //   get the data from html using id

    serial += 1;

    const ellipseShapeName = document.getElementById(
      "ellipse-shape-title"
    ).innerText;

    const ellipseFirstInput = document.getElementById(
      "ellipse-first-input-field"
    ).value;
    const ellipseSecondInput = document.getElementById(
      "ellipse-second-input-field"
    ).value;

    if (
      ellipseFirstInput == "" ||
      ellipseSecondInput == "" ||
      ellipseFirstInput <= 0 ||
      ellipseSecondInput <= 0 ||
      typeof ellipseFirstInput !== "string" ||
      typeof ellipseSecondInput !== "string"
    ) {
      return alert("please enter any valid number");
    }

    const ellipseTotalArea =
      0.5 * parseInt(ellipseFirstInput) * parseInt(ellipseSecondInput);

    // show displayData
    displayData(ellipseShapeName, ellipseTotalArea);
  });

// getalldata
document.getElementById("pera-card-btn").addEventListener("click", function () {
  serial += 1;
});
