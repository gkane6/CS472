/*it("Filter Banned words", () => {
  assert.equal(
    "This house is nice!",
    "This house is not nice!".filterBannedWrd())
});
it("Bubble sort with Map", () => {
  const pr = [-2, 0, 1, 3, 4, 6]
  const test =[6,4,0, 3,-2,1]
  assert.equal(pr.join(','), test.bubbleSort().join(','));
});
*/

var x = 5;
var y = 7;
function a() {
    function b() {
        console.log(`1: x=${x} y=${y}`);//undefined 7
        y = 10;
        return function c(y) {
            console.log(`2: x=${x} y=${y}`);//10 20
        }
    }
    console.log(`3: x=${x} y=${y}`)// undefined 7
    var z = b()
    var x = 10;
    z(20);
}
console.log(`4: x=${x} y=${y}`); //x 5. y7
a();
console.log(`5: x=${x} y=${y}`);//5 10
