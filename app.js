var prices = [];
var discounts = [];

document.getElementById("calc").onclick = GetDiscount;
document.getElementById("clear").onclick = ClearFields;

function GetDiscount() {
    prices = document.getElementsByClassName("price");
    discounts = document.getElementsByClassName("discount");
    
    var length = prices.length;
    var discountedPrice = 0;
    var regPrice = 0;
    
    for (i = 0; i < length; i++) {
        regPrice += parseInt(prices[i].value);
        discountedPrice += prices[i].value * (1 - (discounts[i].value / 100));
    }
    
    var discount = regPrice - discountedPrice;
    var percentDiscount = (discount / regPrice) * 100;
    var itemPrice = discountedPrice / length;
    document.getElementById("result").innerHTML = 
                "Regular Price: $" + regPrice.toFixed(2) + "<br>" +
                "Discounted Price $" + discountedPrice.toFixed(2) + "<br>" +
                "Discount Percent: " + percentDiscount.toFixed(2) + "%<br>" +
                "Price per Item: $" + itemPrice.toFixed(2) + "<br>";
}

function ClearFields () {
    var length = prices.length;
    
    for (i = 0; i < length; i++) {
        document.getElementsByClassName("price")[i].value = "";
        document.getElementsByClassName("discount")[i].value = "";
    }
}