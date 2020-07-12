var link = document.querySelector(".link-search-hotel");
var popup = document.querySelector(".popup");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});
