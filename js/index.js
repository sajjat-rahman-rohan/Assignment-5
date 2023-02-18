//  add click event handler with the blog button
document
  .getElementById("header-blog-btn")
  .addEventListener("click", function () {
    window.open("blog.html", "_blank");
  });

// all shape part
let serial = 0;

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
    peraFirstInput <= pera <= 0 ||
    typeof peraFirstInput !== "string" ||
    typeof peraFirstInput !== "string"
  ) {
    return alert("please enter any valid number");
  }

  const peraTotalArea = parseInt(peraFirstInput) * parseInt(peraSecondInput);

  // show displayData
  displayData(peraShapeName, peraTotalArea);
});

document.getElementById("pera-card-btn").addEventListener("click", function () {
  serial += 1;
});