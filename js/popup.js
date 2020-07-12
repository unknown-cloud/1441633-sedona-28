var link = document.querySelector(".link-search-hotel");
var popup = document.querySelector(".popup");
var form = popup.querySelector(".visit-form");
var arrival = popup.querySelector(".arrival");
var departure = popup.querySelector(".departure");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrival");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");

  if (storage) {
    arrival.value = storage;
    departure.focus();
  } else {
    arrival.focus();
  }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
      evt.preventDefault();
      console.log("Введите данные");
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("arrival", arrival.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})
