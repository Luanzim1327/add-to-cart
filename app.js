const product = [
    {
        id:0,
        image:"./image/produto-1.jpg",
        title:"Iphone",
        price:100
    },

    {
        id:1,
        image:"./image/produto-2.jpg",
        title:"TV Samsung",
        price:450
    },

    {
        id:2,
        image:"./image/produto-3.jpg",
        title:"PC Gamer",
        price:120
    },

    {
        id:3,
        image:"./image/produto-1.jpg",
        title:"Iphone XR",
        price:220
    },
]

const categories = [...new Set(product.map((item) => 
        {return item}    
        // como funciona esse new Set
))]

let i = 0;

document.getElementById("root").innerHTML = categories.map((item) => {
    var {image , title , price} =  item;
    // como funciona essa tipo de variável , so funciona para objetos ?
    
    return(
        `<div class="box">
            <div class="img-box">
                <img class="images" src=${image}></img>
            </div>
        <div class="bottom">
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` + 
            "<button onclick='addToCart("+(i++)+")'>Add to cart</button>" + 
            `</div>
             </div>
            `

    )
}).join("");
// pq se usa essa propriedade join() aqui

let cart = [];

function addToCart (e) {
    cart.push({...categories[e]});
    console.log(e);
    displayCart();
}

function delElement (e) {
    cart.splice(e , 1);
    displayCart();
}

function  displayCart(e) {
    let j = 0;
    total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if(cart.length === 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty"
        document.getElementById("total").innerHTML = "$ "+0+".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            var {image , title , price} = item;
            total = total + price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return (
                `<div class="cart-item">
                    <div class="row-img">
                        <img class="rowimg" src=${image}>
                    </div>
                <p style="font-size:12px;">${title}</p>
                <h2 style="font-size:15px;">$ ${price}.00</h2> ` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            )
        }).join("")
    }
}
// pq se usa essa propriedade join() aqui