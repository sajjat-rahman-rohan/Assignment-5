//  add click event handler with the blog button
document
  .getElementById("header-blog-btn")
  .addEventListener("click", function () {
    // (window.location.href = "blog.html"), "_blank";
    window.open("blog.html", "_blank");
  });
