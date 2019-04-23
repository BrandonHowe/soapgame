var currentlySellingSoap = 0;

sellSoapMenuModalContentIncreasePrice.onclick = function() {
  player.costs.soap += 0.05;
  player.costs.soap = Number(player.costs.soap).toFixed(2);
  O("sellSoapMenuModalContentCurrentPriceSpan").innerHTML = player.costs.soap;
}

sellSoapMenuModalContentDecreasePrice.onclick = function() {
  if (player.costs.soap > 0.05) {
    player.costs.soap -= 0.05;
    player.costs.soap = Number(player.costs.soap).toFixed(2);
    O("sellSoapMenuModalContentCurrentPriceSpan").innerHTML = player.costs.soap;
  }
}

function sellSoapChance() {
    if (player.costs.soap > 1) {
        player.costs.sellchance = ((player.costs.soap - 1) * 100) / player.costs.sellchancemodifier;
        O("sellSoapMenuModalContentCurrentSellChanceSpan").innerHTML = player.costs.sellchance;
    } else {
        player.costs.sellchance = 1;
    }
}

//// TODO: fix the thing
