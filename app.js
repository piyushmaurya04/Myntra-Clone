let bagItems;

(function Onload(){
  let bagitemStr = localStorage.getItem('bagItem');
  bagItems = bagitemStr ? JSON.parse(bagitemStr) : [];
  displayitems()
  displayBagItem();
})();



function addToBag(itemID,ItemName){
  let containe = false;
  bagItems.forEach(item =>{
    if(item==itemID){
      alert("Item already Added");
      containe =true;
    }
  })
  if(!containe){
    bagItems.push(itemID);
    displayBagItem();
    localStorage.setItem('bagItem',JSON.stringify(bagItems))
    alert(`Item Added To Bag`);
  }
    
}

function displayBagItem(){
  let bag_count = document.querySelector(".bag_count");
  if(bagItems.length > 0){
    bag_count.innerText = bagItems.length;
    bag_count.style.visibility='visible';

  }else{
    bag_count.style.visibility='hidden';
  }
}

function displayitems() {
let containerElement = document.querySelector(".container");
 if(!containerElement){
  return ;
 }
let innerHtml = '';
items.forEach(item => {
  innerHtml += `
  <div class="item_container">
    <img class="item-img" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company_name">${item.company}</div>
    <div class="item_name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="orijinal-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="add-bag-btn" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`
});
containerElement.innerHTML = innerHtml;
};
