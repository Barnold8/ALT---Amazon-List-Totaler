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


insertPriceTotal()


