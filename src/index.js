
function O(i) {
    return document.getElementById(i);
}

function buySoap () {
    if (player.inventory.money >= player.costs.soap){
        player.inventory.money -= player.costs.soap;
        player.inventory.soap++;
        O("soapAmount").innerHTML = player.inventory.soap;
        O("moneyAmount").innerHTML = player.inventory.money;
    }
}

//test
