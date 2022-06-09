function change(){
  var tinh = document.getElementById('tinh').value;
  
  var huyen = document.getElementById('huyen');

  if(tinh === "danang") {
    huyen.innerHTML = 
    `<select name="huyen" id="huyen">
        <option value="hoakhanh">Hòa Khánh</option>
        <option value="hoabac">Hòa Bắc</option>
        <option value="thanhkhe">Thanh Khê</option>
    </select>`
  }
  else if (tinh === "haiphong") {
    huyen.innerHTML =
    `<select name="huyen" id="huyen">
        <option value="leloi">Lê Lợi</option>
        <option value="tambac">Tam Bạc</option>
        <option value="chuvanan">Chu Văn An</option>
    </select>`
  }
  else if (tinh === "dalat") {
    huyen.innerHTML =
    `<select name="huyen" id="huyen">
        <option value="phuong1">Phường 1</option>
        <option value="phuong2">Phường 2</option>
        <option value="phuong3">Phường 3</option>
    </select>`
  } 
  else {
    huyen.innerHTML =
    `<select name="huyen" id="huyen">
        <option value="haibatrung">Hai-ba-trung</option>
        <option value="hoangmai">Hoang-mai</option>
        <option value="minhkhai">Minh-khai</option>
    </select>`
  } 
}


function changeHuyen() {
  const danhSachHuyen = {
    haibatrung: ["Bạch Mai", "Bách Khoa", "Thanh Nhàn"],
    hoangmai: ["Lĩnh Nam", "Thúy Yên", "Pháp Vân"],
    tayho: ["Thụy Khuê", "Yên Phụ", "Xuân La"],

    hoakhanh: ["Hòa Khánh Nam", "Hòa Khánh Tây", "Hòa Khánh Bắc"],
    hoabac: ["Hòa Bắc Nam", "Hoà Bắc Tây", "Hòa Bắc Đông"],
    thanhkhe: ["Hòa Khê", "Chính Gián", "Xuân Hà"],

    leloi: ["Lạch Tray", "Gia Viên", "Cầu Đất"],
    tambac: ["Hồng Phong", "Phạm Hồng Thái", "Phan Bội Châu"],
    chuvanan: ["Ngô Quyền", "Hàng Kênh", "Nghĩa Xá"],

    phuong1: ["Phan Đình Phùng", "Trần Quốc Toản", "Đinh Tiên Hoàng"],
    phuong2: ["Tà Nung", "Trạm Hành"],
    phuong3: ["Xuân Thọ", "Xuân Trường"]
  };

  var xa = document.getElementById('xa');
  var xaMoi = [];
  var huyen = document.getElementById('huyen').value;

  for(let i in danhSachHuyen) {
    if (i === huyen) {
      danhSachHuyen[i].forEach(function(item, index) {
        xaMoi += `<option value ="${item}"> ${item}</option>`;
      });
    }
    xa.innerHTML = xaMoi;
  }
}

function hide() {
  var mess = document.getElementsByClassName('mess');
  console.log(mess);

  mess[0].innerHTML = "Bạn đã lựa chọn Thành phố: " + `<b>${tinh.value}</b>` + " Huyện: " + `<b>${huyen.value }</b>`+ " Xã: " + `<b>${xa.value}</b>`;
}

