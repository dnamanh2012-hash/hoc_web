const nut = document.getElementById("nut");
const so = document.getElementById("so");
const tang = document.getElementById("tang");
const giam = document.getElementById("giam");
const reset = document.getElementById("reset");

let dem = 0;
function(capnhat) {
  so.textContent = dem;
}

tang.addEventListener("click", function () {
  dem++;
  capnhat();
});

giam.addEventListener("click", function () {
  if (dem > 0) {
    dem--;
    capnhat();
  }
});

reset.addEventListener("click", function () {
  dem = 0;
  capnhat();
});

nut.addEventListener("click", function () {
  document.body.classList.toggle("sang");

  if (document.body.classList.contains("sang")) {
    nut.textContent = "Tắt đèn";
  } else {
    nut.textContent = "Bật đèn";
  }
});
