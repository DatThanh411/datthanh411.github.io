var carts = [
    { id: 1, name: "Product 1", qty: 1, price: 9 },
    { id: 1, name: "Product 2", qty: 2, price: 7 },
    { id: 1, name: "Product 3", qty: 1, price: 6 },
];

let totalQty = "" * 1;
for (let i = 0; i < carts.length; i++) {
    totalQty += (carts[i].qty);
}
document.getElementById("numCarts").innerHTML = totalQty;

function hide() {
    setTimeout(function(){
        $('.spinner').fadeOut(4000,function(){
            $('.modal-content').fadeIn();
        });
    });
}

function showModal() {
    
    let contentCart = "";
    for (let i = 0; i < carts.length; i++) {
        let obj = carts[i];
        contentCart += `
            <div class="row body-product">
                <div class="col-6 p-body d-flex">
                    <div class="product-img">
                        <img src="../../img/image.png" alt="">
                    </div>
                    <div class="product-name d-flex f-column j-center">
                        <div class="name">${obj.name}</div>
                        <div class="remove">
                            <a href="">Remove</a>
                        </div>
                    </div>
                    
                </div>
                <div class="col-6">
                    <div class="row info">
                        <div class="col-4 detail d-flex j-center a-center font-5 singlePrice">$${obj.price}</div>
                        <div class="col-4 detail d-flex j-center a-center ">
                            <input type="number" name="Quantity" class="Quantity" min="1" max="99" onclick="total()" value="${obj.qty}">
                        </div>
                        <div class="col-4 detail d-flex j-center a-center font-5 totalPrice">$${obj.price * obj.qty} </div>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById("md-body-content").innerHTML = contentCart;

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })
    // var modalToggle = document.getElementById('exampleModal') // relatedTarget
    myModal.show();
}


function total() {
    var count = document.getElementsByClassName("Quantity");
    var totalPrice = document.getElementsByClassName("totalPrice");
    var subFinal = "" * 1;

    for (let i = 0; i < carts.length; i++) {
        let obj = carts[i];
        totalPrice[i].innerHTML = "$" + count[i].value * `${obj.price}`;
        subFinal += count[i].value * `${obj.price}`;
    }

    document.getElementById("finalPrice").innerHTML = "$" + subFinal;

    var finalCount = count[0].value * 1 + count[1].value * 1 + count[2].value * 1;
    document.getElementById("numCarts").innerHTML = finalCount;
}