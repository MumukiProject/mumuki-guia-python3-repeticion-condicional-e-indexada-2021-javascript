describe("", () => {
  it("todos los días un poco con [35, 40, 32, 60] es true", () => {
    assert(productoria([35, 40, 32, 60]));
  })
  it("todos los días un poco con [15, 45, 90, 0] es false", () => {
    assert(productoria([15, 45, 90, 0]));
  })
})