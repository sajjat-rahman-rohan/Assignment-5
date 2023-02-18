//  add click event handler with the blog button
document
  .getElementById("header-blog-btn")
  .addEventListener("click", function () {
    // (window.location.href = "blog.html"), "_blank";
    window.open("blog.html", "_blank");
  });

// triangle area calculate start

document
  .getElementById("area-calculate-btn")
  .addEventListener("click", function () {
    const triangleFirstInputField =
      document.getElementById("first-input-field");
    const firstInputFieldNumber = triangleFirstInputField.value;
    const firstInputFieldNumberToString = parseInt(firstInputFieldNumber);

    const triangleSecondInputField =
      document.getElementById("second-input-field");
    const secondInputFieldNumber = triangleSecondInputField.value;
    const secondInputFieldNumberToString = parseInt(secondInputFieldNumber);

    const triangleTotalArea =
      0.5 * firstInputFieldNumberToString * secondInputFieldNumberToString;

    // console.log(triangleTotalArea + "cm");

    const areaListTitle = document.getElementById("list-title");
    const listTitle = (areaListTitle.innerText = "Triangle");

    const areaList = document.getElementById("triangle-total-area");
    const typeNumber = (areaList.innerText = triangleTotalArea + "cm");

    const areaListBtn = document.getElementById("area-list-btn");
    // const listBtn = (areaListBtn.innerText = "Covert to m2");
    areaListBtn.style.display = "block";
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

// total area calculation
