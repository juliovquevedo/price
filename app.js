var prices = [];
var discounts = [];

document.getElementById("calc").onclick = GetDiscount;

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
    document.getElementById("result").innerHTML = "Regular Price: $" + regPrice + "<br>" +
                                                "Discounted Price $" + discountedPrice + "<br>" +
                                                "Discount Percent: " + percentDiscount + "%<br>" +
                                                "Price per Item: $" + itemPrice + "<br>";
}