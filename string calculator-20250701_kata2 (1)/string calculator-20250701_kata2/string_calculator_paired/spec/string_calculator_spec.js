describe("electrons", function () {
  it("should return 6 for [1, 2, 3, 4, 5]", function () {
    expect(electrons([1, 2, 3, 4, 5])).toBe(6);
  });

  it("should return 4 for [2, 2, 3, 3]", function () {
  expect(electrons([2, 2, 3, 3])).toBe(4);
});

it("should return 2 for [6, 6, 4, 4, 1, 3]", function () {
    expect(electrons([6, 6, 4, 4, 1, 3])).toBe(2);
  });

  it("should return 12 for [3, 5, 3, 5, 4, 2]", function () {
  expect(electrons([3, 5, 3, 5, 4, 2])).toBe(12);
});

it("should return 6 for [1, 1, 2, 2, 3, 3]", function () {
  expect(electrons([1, 1, 2, 2, 3, 3])).toBe(6);
});




});
