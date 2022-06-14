var companys = [
     {name: "Công ty A", job: "Lập trình Web", location: "Hà Nội", salary: "7.000.000", tier: "Sinh viên", time: "3 ngày trước", type: "Thực tập"},

     {name: "Công ty B", job: "Quản lý dự án", location: "Hồ Chí Minh", salary: "20.000.000", tier: "Quản lý", time: "1 tuần trước", type: "NV chính thức"},

     {name: "Công ty C", job: "3D Design", location: "Hà Nội", salary: "15.000.000", tier: "Nhân viên", time: "2 tuần trước", type: "NV chính thức"},

     {name: "Công ty D", job: "Kế toán", location: "Đà nẵng", salary: "10.000.000", tier: "Nhân viên", time: "3 ngày trước", type: "NV chính thức"},

     {name: "Công ty E", job: "Lái xe nâng", location: "Hà Nội", salary: "7.000.000", tier: "Nhân viên", time: "1 tháng trước", type: "Thời vụ"},
];


let valueInput = [];

function find() {
     let ten = document.getElementById('nameCompany').value;
     let congViec = document.getElementById('jobCompany').value;
     let diaDiem = document.getElementById('locationCompany').value;
     let luong = document.getElementById('luong').value;
     let chucVu = document.getElementById('tierCompany').value;
     let thoiGian = document.getElementById('timeUpload').value;
     let hinhThuc = document.getElementById('typeCompany').value;

     // valueInput = [
     //      {name:`${ten}`,job:`${congViec}`,location:`${diaDiem}`,salary:`${luong}`,tier:`${chucVu}`,time:`${thoiGian}`,type:`${hinhThuc}`},
     // ];

     // console.log(valueInput);

     let innerHTMLs = "";
        
     let result = companys.filter((item) => item.name == ten || item.job == congViec || item.location == diaDiem || item.salary == luong || item.tier == chucVu || item.time == thoiGian || item.type == hinhThuc );

     console.log(result);

     for ( let company of result) {
          innerHTMLs += ` <tr>
          <td>${company.name}</td> 
          <td>${company.job}</td>
          <td>${company.location}</td>
          <td>${company.salary}</td>
          <td>${company.tier}</td>
          <td>${company.time}</td>
          <td>${company.type}</td>
     </tr>`
     }
     
     document.getElementById('content').innerHTML = innerHTMLs;
}


function unhide() {
   var subMenu = document.getElementsByClassName('sub-menu');
   var body = document.getElementsByClassName('body');

   if (subMenu[0].style.top === "-70px" ) {
        subMenu[0].style.top = "120px";
        body[0].style.top = "260px";
   } else {
        subMenu[0].style.top = "-70px";
        body[0].style.top = "100px";
   }
   
}