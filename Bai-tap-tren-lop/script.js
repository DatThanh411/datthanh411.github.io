function change(event){
    var huyen = document.getElementById('huyen');

    for(const name in huyen){
    if(event.target.value = "hai-phong") {
      huyen.innerHTML =
       `<select name="huyen" id="huyen">
            <option value="le-lo">Le-loi</option>
            <option value="123">123</option>
            <option value="456">456</option>
        </select>`; 
    } else
    if(event.target.value = "da-nang") {
        huyen.innerHTML =
         `<select name="huyen" id="huyen">
              <option value="hoi-an">Hoi-an</option>
              <option value="hue">Hue</option>
              <option value="789">789</option>
          </select>`;
    } else 
    if(event.target.value = "da-lat") {
        huyen.innerHTML =
         `<select name="huyen" id="huyen">
              <option value="quang-trung">Quang-trung</option>
              <option value="nguyen-trai">Nguyen-trai</option>
              <option value="789">789</option>
          </select>`;
      }  
    }
      console.log(event);
  }

 

    const danhSachTinh = {
      hanoi: ["hai ba trưng", "tây hồ", "đống đa"],
      haiphong: ["thuy nguyên", "ngô quyền", "tiên lãng"],
      binhdinh: ["an nhơn", "hoai nhơn", "quy nhơn"],
    };

    let tinh = document.querySelector("#tinh");
    let huyen = document.querySelector("#huyen");
    let submit = document.querySelector("#submit");
    let mess = document.querySelector("#mess");

    tinh.addEventListener("change", function() {
      let tinhDuocChon = tinh.value;
      let huyenCanThem =
        ' <option value="" selected disabled hidden>Chon huyen</option>';
      for (const prop in danhSachTinh) {
        if (prop === tinh.value) {
          // console.log(danhSachTinh[prop]);
          danhSachTinh[prop].forEach((el) => {
            huyenCanThem += `<option value="${el}">${el}</option>`;
          });
          huyen.innerHTML = huyenCanThem;
        }
      }
    });
    
    submit.addEventListener("click", function() {
      console.log(mess);
      mess.innerHTML = "Huyen:" + huyen.value + "_" + "Tinh:" + tinh.value;
    });

