const oNhap = document.getElementById("o-nhap");
const nutThem = document.getElementById("nut-them");
const danhSach = document.getElementById("danh-sach");

const daCat = localStorage.getItem("viec");
let viec = daCat ? JSON.parse(daCat) : [];

function luu() {
  localStorage.setItem("viec", JSON.stringify(viec));
}

function ve() {
  danhSach.innerHTML = "";

  viec.forEach(function (v, i) {
    const li = document.createElement("li");
    if (v.xong) {
      li.classList.add("xong");
    }

    const span = document.createElement("span");
    span.textContent = v.chu;
    span.addEventListener("click", function () {
      v.xong = !v.xong;
      luu();
      ve();
    });

    const nutXoa = document.createElement("button");
    nutXoa.textContent = "Xóa";
    nutXoa.addEventListener("click", function () {
      viec.splice(i, 1);
      luu();
      ve();
    });

    li.appendChild(span);
    li.appendChild(nutXoa);
    danhSach.appendChild(li);
  });
}
function them() {
  const chu = oNhap.value.trim();

  if (chu === "") {
    return;
  }
  viec.push({ chu: chu, xong: false });
  oNhap.value = "";
  luu();
  ve();
}

nutThem.addEventListener("click", them);
oNhap.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    them();
  }
});

ve();
