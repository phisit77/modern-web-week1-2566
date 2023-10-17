const apple = 5;
const banana = 20;
console.log(apple + banana); //25

var mango = 20;
{
  var mango = 10;
  console.log(mango + 5); //1 = 15
}
console.log(mango + 5); //2 = 15
