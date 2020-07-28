it("Sum all element in the  array", () => {
  assert.equal(10, sum([1, 2, 3, 4]));
});
it("Multiply all element in the array", () => {
  assert.equal(24, multiply([1, 2, 3, 4]));
});
it("Reverse a given String", () => {
  assert.equal("uytrewq", reverse("qwertyu"));
});
it("Find the longuest word", () => {
  assert.equal("abcdefg", filterLongWords(["abc", "abcd", "abcdefg"], 6));
});
