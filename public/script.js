"use strict";
const open = document.querySelector("#open");
const openBox = document.querySelector("#open-box");
const close = document.querySelector("#close");

document.querySelector("#open").addEventListener("click", function () {
  if (document.querySelector("#open-box").classList.contains("hidden")) {
    document.querySelector("#open-box").classList.remove("hidden");
    if (!document.querySelector("#open").classList.contains("hidden")) {
      document.querySelector("#open").classList.add("hidden");
      document.querySelector("#close").classList.remove("hidden");
    }
  }
});
document.querySelector("#close").addEventListener("click", function () {
  if (!document.querySelector("#open-box").classList.contains("hidden")) {
    document.querySelector("#open-box").classList.add("hidden");
    if (!document.querySelector("#close").classList.contains("hidden")) {
      document.querySelector("#close").classList.add("hidden");
      document.querySelector("#open").classList.remove("hidden");
    }
  }
});
