console.log("Xin chào từ JavaScript!");
const nut = document.getElementById("nut");

let nenVang = false;
nut.addEventListener("click", function () {
  if (nenVang === false) {
    document.body.style.backgroundColor = "lightYellow";
    document.body.style.color = "#222";
    nut.textContent = "Tắt đèn";
    nenVang = true;
  } else {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";
    nut.textContent = "Bật đèn";
    nenVang = false;
  }
});
