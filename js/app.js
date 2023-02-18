//  add click event handler with the blog button
document
  .getElementById("header-blog-btn")
  .addEventListener("click", function () {
    // (window.location.href = "blog.html"), "_blank";
    window.open("blog.html", "_blank");
  });

// triangle area calculate start

document
  .getElementById("triangle-area-calculate-btn")
  .addEventListener("click", function () {
    const triangleFirstInputField = document.getElementById(
      "triangle-first-input-field"
    );
    const firstInputFieldNumber = triangleFirstInputField.value;
    const firstInputFieldNumberToString = parseInt(firstInputFieldNumber);

    const triangleSecondInputField = document.getElementById(
      "triangle-second-input-field"
    );
    const secondInputFieldNumber = triangleSecondInputField.value;
    const secondInputFieldNumberToString = parseInt(secondInputFieldNumber);

    const triangleTotalArea =
      0.5 * firstInputFieldNumberToString * secondInputFieldNumberToString;

    // if (triangleTotalArea < 0) {
    //   window.alert("please type number");
    // }

    const areaListTitle = document.getElementById("first-list-title");
    const listTitle = (areaListTitle.innerText = "Triangle");

    const areaList = document.getElementById("first-triangle-total-area");
    const typeNumber = (areaList.innerText = triangleTotalArea + "cm");

    // const areaListBtn = document.getElementById("area-list-btn");
    // // const listBtn = (areaListBtn.innerText = "Covert to m2");
    // areaListBtn.style.display = "block";
    // areaList.style.display = "none";

    // pinFailureMessage.style.display = "block";
    // areaListBtn.style.display = "none";

    // const mainContainer = document.getElementById("final-total-area");
    // const sectionDress = document.createElement("section");
    // sectionDress.innerHTML = `
    // <ol>
    //     <li>   <p> Triangle</p> </li>

    // </ol>
    // `;
    // mainContainer.appendChild(sectionDress);
  });

// reactangle final total area

document
  .getElementById("rectangle-area-calculate-btn")
  .addEventListener("click", function () {
    const rectangleFirstInputField = document.getElementById(
      "rectangle-first-input-field"
    );
    const firstInputFieldNumber = rectangleFirstInputField.value;
    const firstInputFieldNumberToString = parseInt(firstInputFieldNumber);

    const rectangleSecondInputField = document.getElementById(
      "rectangle-second-input-field"
    );
    const secondInputFieldNumber = rectangleSecondInputField.value;
    const secondInputFieldNumberToString = parseInt(secondInputFieldNumber);

    const rectangleTotalArea =
      firstInputFieldNumberToString * secondInputFieldNumberToString;

    const areaListTitle = document.getElementById("second-list-title");
    const listTitle = (areaListTitle.innerText = "Rectangle");

    const areaList = document.getElementById("second-rectangle-total-area");
    console.log(rectangleTotalArea);
    areaList.innerText = rectangleTotalArea + "cm";
  });

// pera final total area

document
  .getElementById("pera-area-calculate-btn")
  .addEventListener("click", function () {
    const rectangleFirstInputField = document.getElementById(
      "pera-first-input-field"
    );
    const firstInputFieldNumber = rectangleFirstInputField.value;
    const firstInputFieldNumberToString = parseInt(firstInputFieldNumber);

    const rectangleSecondInputField = document.getElementById(
      "pera-second-input-field"
    );
    const secondInputFieldNumber = rectangleSecondInputField.value;
    const secondInputFieldNumberToString = parseInt(secondInputFieldNumber);

    const rectangleTotalArea =
      firstInputFieldNumberToString * secondInputFieldNumberToString;

    const areaListTitle = document.getElementById("pera-list-title");
    const listTitle = (areaListTitle.innerText = "Parallelogram");

    const areaList = document.getElementById("second-pera-total-area");
    console.log(rectangleTotalArea);
    areaList.innerText = rectangleTotalArea + "cm";
  });
