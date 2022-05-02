describe("", () => {
  it("sinExtremos de la lista ([4, 5, 10, 2, 3]) retorna [5, 10, 2]", () => {
    assert.deepEqual(sinExtremos([4, 5, 10, 2, 3]), [5, 10, 2]);
  })
  it("sinExtremos de la lista ([4, 5, 10, 2, 3, 9]) retorna [5, 10, 2, 3]", () => {
    assert.deepEqual(sinExtremos([4, 5, 10, 2, 3, 9]), [5, 10, 2, 3]);
  })
  it("sinExtremos de la lista ([4, 5, 10]) retorna [5]", () => {
    assert.deepEqual(sinExtremos([4, 5, 10]), [5]);
  })
  it("sinExtremos de la lista ([4, 20]) retorna la lista vacía", () => {
    assert.deepEqual(sinExtremos([4, 20]), []);
  })
  it("extremos de la lista ([4, 5, 10, 2, 3]) retorna [4, 3]", () => {
    assert.deepEqual(extremos([4, 5, 10, 2, 3]), [4, 3]);
  })
  it("extremos de la lista ([4, 3]) retorna [4, 3]", () => {
    assert.deepEqual(extremos([4, 3]), [4, 3]);
  })
  it("extremos de la lista ([1, 2, 5]) retorna [1, 5]", () => {
    assert.deepEqual(extremos([1, 2, 5]), [1, 5]);
  })
})