var jobs = [
    {
      jobName: "Lập trình viên",
      company: "FPT",
      salary: "20.000.000d",
      city: "Ha Noi",
      level: "student",
      time: "1-week",
      status: "nhan-vien-chinh-thuc",
      benefit: "che-do-bao-hiem",
    },
    {
      jobName: "Lập trình viên",
      company: "Zing",
      salary: "6.000.000d",
      city: "Ho Chi Minh",
      level: "student",
      time: "3-days",
      status: "nhan-vien-chinh-thuc",
      benefit: "du-lich",
    },
    {
      jobName: "Kinh Doanh",
      company: "Vin",
      salary: "9.000.000d",
      city: "Da Nang",
      level: "employee",
      time: "3-days",
      status: "thoi-vu-tu-do",
      benefit: "du-lich",
    },
    {
      jobName: "kế Toán",
      company: "Zoo",
      salary: "5.000.000d",
      city: "Campodia",
      level: "employee",
      time: "1-week",
      status: "thoi-vu-tu-do",
      benefit: "che-do-bao-hiem",
    },
  
    {
      jobName: "Kế Toán",
      company: "JAV",
      salary: "60.000.000d",
      city: "Japan",
      level: "employee",
      time: "3-days",
      status: "thoi-vu-tu-do",
      benefit: "du-lich",
    },
  
    {
      jobName: "Lập trình viên",
      company: "Casino",
      salary: "9.000.000d",
      city: "Hong Kong",
      level: "student",
      time: "1-week",
      status: "nhan-vien-chinh-thuc",
      benefit: "che-do-bao-hiem",
    },
  ];
  

  function find() {
    let inputValue = $("#input").val();
    let resultNormal = jobs.filter(key => key.jobName.includes(inputValue));
    let innerHTML = "";
    for (let job of resultNormal) {
      innerHTML += ` <tr>
          <td>${job.company}</td> 
          <td>${job.jobName}</td>
          <td>${job.city}</td>
          <td>${job.salary}</td>
          <td>${job.level}</td>
          <td>${job.time}</td>
          <td>${job.status}</td>
          <td>${job.benefit}</td>
     </tr>`
    };
    $("#content").html(innerHTML);
  }

function findMore() {
  let salaryDeal = $(".sal:checked").val();
  let status = $("#status").val();
  let level = $("#level").val();

  let result = jobs.filter(key => {
    let inputValue = $("#input").val();
    let numSal = key.salary.replace(/\./g, '').replace('d','');
    let num = parseInt(numSal);
    if(salaryDeal == 'young') {
      return key.jobName.includes(inputValue) && num < 18000000;
    } else if (salaryDeal == 'mature') {
      return key.jobName.includes(inputValue) && num <= 30000000 && num >= 18000000;
    } else if(salaryDeal == 'senior'){
      return key.jobName.includes(inputValue) && num > 50000000;
    } else if (level == 'employee' || level == 'student') {
      return key.jobName.includes(inputValue) && key.level == level;
    } else if (status == 'nhan-vien-chinh-thuc' || status == 'thoi vu tu do') {
      return key.jobName.includes(inputValue) && key.status == status;
    }
  });


  let innerHTML = "";
  for (let job of result) {
    innerHTML += ` <tr>
        <td>${job.company}</td> 
        <td>${job.jobName}</td>
        <td>${job.city}</td>
        <td>${job.salary}</td>
        <td>${job.level}</td>
        <td>${job.time}</td>
        <td>${job.status}</td>
        <td>${job.benefit}</td>
   </tr>`
  };
  $("#content").html(innerHTML);
}



  // click nút tìm kiếm -> tìm kiếm từ có trong jobName
  // click tìm kiếm nâng cao sẽ hiển thị các ô tìm kiếm kết hợp với điều kiện tìm kiếm nâng cao