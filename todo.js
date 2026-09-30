const oNhap = document.getElementById("o-nhap");
const nutThem = document.getElementById("nut-them");
const danhSach = document.getElementById("danh-sach");

function them() {
  const chu = oNhap.value.trim();

  if (chu === "") {
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = chu;
  span.addEventListener("click", function () {
    li.classList.toggle("xong");
  });

  const nutXoa = document.createElement("button");
  nutXoa.textContent = "Xóa";
  nutXoa.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(nutXoa);
  danhSach.appendChild(li);
  oNhap.value = "";
}
nutThem.addEventListener("click", them);

oNhap.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    them();
  }
});
