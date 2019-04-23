var sellSoapMenuModal = document.getElementById("sellSoapMenuModal");

// Get the button that opens the modal
var sellSoapButton = document.getElementById("sellSoapButton");

// Get the <span> element that closes the modal
var sellSoapCloseSpan = document.getElementsByClassName("sellSoapMenuModalClose")[0];
//
function sellSoapMenuModalOpen () {
  sellSoapMenuModal.style.display = "block";
  currentlySellingSoap = 1;
}

// When the user clicks on the button, open the modal
sellSoapButton.onclick = function() {
  document.getElementById("sellSoapMenuModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sellSoapMenuModalClose.onclick = function() {
  sellSoapMenuModal.style.display = "none";
  currentlySellingSoap = 0;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sellSoapMenuModal) {
    sellSoapMenuModal.style.display = "none";
    currentlySellingSoap = 0;
  }
}
