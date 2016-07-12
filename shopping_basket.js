
var basket = {
  total: 0,
  contents: [],
  add: function(shopping){
    this.contents.push(shopping);
  },
  tally: function(){
    var sum = 0
    for (var i = 0; i < this.contents.length; i +=1){ 
      sum += this.contents[i].price
    }
      this.total = sum; // <===================   not working
  },
  remove: function(index, amount){
    this.contents.splice(index, amount);
  },
  discount: function(){
    if (this.total >= 20){ this.total * 0.9}
  },
}


basket.add( 
  apple = {
    type: "apple",
    colour: "green",
    taste: "sweet",
    price: 0.30
  })

basket.add( 
  kiwi = { 
    type: "kiwi",
    colour: "green",
    taste: "bitter",
    price: 1.20
  })

console.log(basket.contents[0]);
console.log(basket.contents[1]);
console.log(basket.total);
basket.remove(0,1);
console.log(basket.contents);
