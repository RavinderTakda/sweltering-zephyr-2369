
  let data = JSON.parse(localStorage.getItem("cartpage")) || [];
  console.log(data);

  let display = (ele) => {
    console.log(ele);
    let firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "firstdiv");

    let img2 = document.createElement("img");
    img2.src = ele.img;

    firstdiv.append(img2);

    let seconddiv = document.createElement("div");
    seconddiv.setAttribute("id", "seconddiv");

    let p1 = document.createElement("p");
    p1.innerText = ele.name;

    let p2 = document.createElement("h2");
    p2.innerText = `INR ${ele.price}`;

    let p3 = document.createElement("p");
    p3.innerText = "★★★★★ 30000";

    let p4 = document.createElement("p");
    p4.innerText = `${ele.name}  it's all about choice. That's why we give you three unique options so you can find the feel that makes you fall asleep happy.`;

    seconddiv.append(p1, p2, p3, p4);

    let thirddiv = document.createElement("div");
    thirddiv.setAttribute("id", "thirddiv");

    let select = document.createElement("select");
    let option1 = document.createElement("option");
    option1.innerHTML = "Qty. 1";

    let option2 = document.createElement("option");
    option2.innerHTML = "Qty. 2";

    let option3 = document.createElement("option");
    option3.innerHTML = "Qty. 3";

    let option4 = document.createElement("option");
    option4.innerHTML = "Qty. 4";

    let option5 = document.createElement("option");
    option5.innerHTML = "Qty. 5";

    select.append(option1, option2, option3, option4, option5);

    let addtocart = document.createElement("div");
    addtocart.setAttribute("id", "addtocart");
    addtocart.addEventListener("click", function () {
      cart(ele);
    });

    let img1 = document.createElement("img");
    img1.src =
      "https://www.iconpacks.net/icons/2/free-icon-add-to-cart-3046.png";

    let p7 = document.createElement("p");
    p7.innerText = "Add to Cart";

    addtocart.append(img1, p7);

    thirddiv.append(select, addtocart);

    let fourthdiv = document.createElement("div");
    fourthdiv.append(seconddiv, thirddiv);

    document.querySelector("#cont").append(firstdiv, fourthdiv);
  };

  display(data);

  let cartdata = JSON.parse(localStorage.getItem("cart")) || [];

  var totalitemincarts = localStorage.getItem("totalitemincart") || 0;

  let cart = (ele) => {
    let count = 0;

    cartdata.forEach(function (elem) {
      if (ele.name == elem.name) {
        count++;
      }
    });

    if (count == 0) {
      ele.qty = 1;
      cartdata.push(ele);
      localStorage.setItem("cart", JSON.stringify(cartdata));
      totalitemincarts++;
      localStorage.setItem("totalitemincart", totalitemincarts);
      //document.getElementById("carttop").innerText = totalitemincarts;
      alert("Product added Successfully");
    } else {
      alert("product already in the cart");
    }
  };

