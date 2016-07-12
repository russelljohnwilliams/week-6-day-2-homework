var basket = require( '../shopping_basket' );

describe( "basket", function(){

  it("discount applied", function(){
    basket.total=30
    assert.deepEqual(27, basket.discount)
  })
})