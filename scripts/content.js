
function getPrices(){

  priceElements = document.getElementsByClassName("price-section")

  for (let item of priceElements) {

    whole = item.getElementsByClassName("a-price-whole")
    fraction = item.getElementsByClassName("a-price-fraction")
    if(whole.length >=1 && fraction.length >=1){
      console.log(item,`${whole[0].innerText}${fraction[0].innerText}`)
    }

    
  }
}


getPrices()
