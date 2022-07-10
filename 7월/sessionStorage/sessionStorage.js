"use strict";

const accessTokenStorage = window.sessionStorage;

const field = document.getElementById("field");

if (accessTokenStorage.getItem("autosave")) {
  field.value = accessTokenStorage.getItem("autosave");
}

field.addEventListener("change", function () {
  accessTokenStorage.setItem("autosave", field.value);
});

accessTokenStorage.clear();
