function getPriceTotal(){

  priceElements = document.getElementsByClassName("price-section")
  priceSymbol = "?"

  runningTotal = 0.0

  if(priceElements.length >=1){
    symbols = priceElements[0].getElementsByClassName("a-price-symbol")
    if(symbols.length >=1 ){
      priceSymbol = symbols[0].innerText
    }
  } 

  for (let item of priceElements) {

    whole = item.getElementsByClassName("a-price-whole")
    fraction = item.getElementsByClassName("a-price-fraction")
    if(whole.length >=1 && fraction.length >=1){
      price = `${whole[0].innerText}${fraction[0].innerText}`
      price = parseFloat(price);
      runningTotal += price
    }
  }
  return `Item list total: ${priceSymbol}${runningTotal}`
  
}

function generateTotalElement(total){
  priceElement = document.createElement("p")
  priceElement.classList.add("a-size-medium")
  priceElement.classList.add("a-text-bold")
  priceElement.appendChild(document.createTextNode(total));
  return priceElement
}

function insertPriceTotal(){

  price = getPriceTotal()
  priceItem = generateTotalElement(price)
  itemList = document.querySelectorAll('[id="item-page-wrapper"]');
  if(itemList.length >=1){
    itemList[0].appendChild(priceItem)
  }
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function addAllItemsToBasket(){

  basketButtons = document.querySelectorAll("[data-action=\"add-to-cart\"]")
  delayTime = 1000 * 0.25 // time for delay in ms 
 
  for(let i = 0; i < basketButtons.length; i++){ // no for each here, nodelist is weird

    buttonLink = ""
    buttonLinkCollection = basketButtons.item(i).getElementsByClassName("a-button-text") // indexing a nodelist in a jank way because... ✨ javascript ✨

    if(buttonLinkCollection.length >= 1){
      wait(delayTime)
      buttonLinkCollection[0].click()
    }

  }
}


function generateAddAllButton(){

  classes = ["a-button", "a-button-normal", "a-button-primary", "a-button-icon", "wl-info-aa_add_to_cart"]
  addButton = document.createElement("button")

  classes.forEach(style => {
    addButton.classList.add(style)
  })

  addButton.addEventListener("click", addAllItemsToBasket)
  addButton.appendChild(document.createTextNode("Add All Items To Basket"))
  
  itemList = document.querySelectorAll('[id="item-page-wrapper"]');
  if(itemList.length >=1){
    itemList[0].appendChild(addButton)
  }

}


insertPriceTotal()
generateAddAllButton()