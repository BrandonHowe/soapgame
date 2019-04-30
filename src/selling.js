var currentlySellingSoap = 0;

sellSoapMenuModalContentIncreasePrice.onclick = function() {
  if (player.costs.sellprice) {
    player.costs.sellprice = Number(player.costs.sellprice);
    player.costs.sellprice += 0.05;
    player.costs.sellprice = Number(player.costs.sellprice).toFixed(2);
    O("sellSoapMenuModalContentCurrentPriceSpan").innerHTML = player.costs.sellprice;
    sellSoapChance();
  }
}

sellSoapMenuModalContentDecreasePrice.onclick = function() {
  if (player.costs.sellprice > 0.05) {
    player.costs.sellprice -= 0.05;
    player.costs.sellprice = Number(player.costs.sellprice).toFixed(2);
    O("sellSoapMenuModalContentCurrentPriceSpan").innerHTML = player.costs.sellprice;
    sellSoapChance();
  }
}

function sellSoapChance() {
    if (player.costs.sellprice > 1) {
        player.costs.sellchance = ((1 / (player.costs.sellprice - 1)) / player.costs.sellchancemodifier).toFixed(2);
        O("sellSoapMenuModalContentCurrentSellChanceSpan").innerHTML = player.costs.sellchance;
    } else {
        player.costs.sellchance = 1;
    }
}

//// TODO: fix the thing
