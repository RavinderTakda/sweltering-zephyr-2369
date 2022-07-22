

let checkout = ()=>{
    window.location.href = 'checkout.html'
}

let cartdata=JSON.parse(localStorage.getItem("cart")) || [];
var totalitemincarts = localStorage.getItem("totalitemincart")||0;

let appendData = ()=>{
    let container = document.getElementById('container');
    container.innerHTML = null;
    

    cartdata.forEach((el)=>{

        let item = document.createElement('div');
        item.className = 'items';

        let imgdiv = document.createElement('div');
        imgdiv.classList = 'imgDiv';

        let detailsdiv = document.createElement('div');
        detailsdiv.className = 'detailsDiv';

        let image = document.createElement('img');
        image.src = el.img;

        let name = document.createElement('p');
        name.innerText=el.name;

        let price = document.createElement('h3');
        price.innerText = `INR ${el.price}`;

        let remove = document.createElement('button');
        remove.innerText = 'Remove';
        remove.id = "remove_btn"
        remove.addEventListener("click", function () {
            removeFn(el);
        });

        var inc = document.createElement("button");
        inc.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        inc.addEventListener("click", function () {
        incfun(el);
        });

        var dec = document.createElement("button");
        dec.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        dec.addEventListener("click", function () {
        decfun(el);
        });

        var quant = document.createElement("p");
        quant.innerText = el.qty;

        var qdiv = document.createElement("div");
        qdiv.className = 'quantity-btn';
        qdiv.append(dec, quant, inc);



        imgdiv.append(image);
        detailsdiv.append(name, price, remove, qdiv);

        item.append(imgdiv, detailsdiv);
        container.append(item)

    });
};

appendData();

function removeFn(data) {
  
    cartdata = cartdata.filter(function (el) {
    return el.name !== data.name;
  });
  localStorage.setItem("cart", JSON.stringify(cartdata));
  appendData()

}

function incfun(elem) {
  elem.qty++;
  localStorage.setItem("cart", JSON.stringify(cartdata));
  appendData(cartdata);
  totalPriceFn();
}

function decfun(elem) {
  if (elem.qty == 1) {
    removeFn(elem);
  } else {
    elem.qty--;
    localStorage.setItem("cart", JSON.stringify(cartdata));
    appendData(cartdata);
    totalPriceFn();
  }
}





let totalPrice = document.getElementById('total_price')
let totalItem = document.getElementById('number')

var total;

function totalPriceFn() {
  total = cartdata.reduce(function (acc, elem) {
    return acc + elem.price * elem.qty;
  }, 0);

  totalPrice.innerText = "INR " + total;
  totalItem.innerText = "( " + cartdata.length + " )   ";
  var priceArr = [total];
  localStorage.setItem("cartPrice", JSON.stringify(priceArr));
  

}

totalPriceFn();


console.log(cartdata)



