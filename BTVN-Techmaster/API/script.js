fetch('https://628b4592667aea3a3e2b48e5.mockapi.io/product')
  .then(response => response.json())
  .then(data => {
   $('#main').html();
  console.log(data)
  let newList = data.map(a => {
    return` 
     <tr>
        <td style="text-align:center;">${a.id}</td>
        <td>${a.name}</td>
        <td>${a.description}</td>
        <td style="text-align:center;">${a.price}</td>
    </tr>`
  }).join(",")
  .replaceAll(/,/g, " ");
  document.querySelector('tbody').innerHTML = newList
});

function add() {
  let description = $(".descreiption").val();
  let id = $(".id").val();
  let name = $(".name").val();
  let price = $(".price").val();

  console.log(price);
  fetch('https://628b4592667aea3a3e2b48e5.mockapi.io/product',{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: JSON.stringify({
      "id": `${id}`,
      "description": `${description}`,
      "name": `${name}`,
      "price": `${price}`,})
  })
    .then(response => response.json())
    .then(data => {
    //hiển thị thông tin products lên trang
    console.log(data)
    location.reload();
  });
}

function update() {
  let description = $(".descreiption-update").val();
  let id = $(".id-update").val();
  let name = $(".name-update").val();
  let price = $(".price-update").val();

  console.log(name);
  fetch('https://628b4592667aea3a3e2b48e5.mockapi.io/product/' + id,{
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: JSON.stringify({
      
      "description": `${description}`,
      "name": `${name}`,
      "price": `${price}`,})
  })
    .then(response => response.json())
    .then(data => {
    //hiển thị thông tin products lên trang
    console.log(data) 
    location.reload();
  });
}

function del() {
  let id =$(".delete-id").val();

  fetch('https://628b4592667aea3a3e2b48e5.mockapi.io/product/' + id,{
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  })
    .then(response => response.json())
    .then(data => {
    //hiển thị thông tin products lên trang
    console.log(data)
    location.reload();
  });

}

function hideAdd() {
  let add = document.getElementsByClassName("form-login");

  if(add[0].style.display === "none") {
    add[0].style.display = "block";
  }else {
    add[0].style.display = "none";
  }
} 

function hideUpdate() {
  let update = document.getElementsByClassName("form-details-update");

  if(update[0].style.display === "none") {
    update[0].style.display = "block";
  }else {
    update[0].style.display = "none";
  }
} 

function hideDelete() {
  let del = document.getElementsByClassName("form-delete");

  if(del[0].style.display === "none") {
    del[0].style.display = "block";
  }else {
    del[0].style.display = "none";
  }
} 