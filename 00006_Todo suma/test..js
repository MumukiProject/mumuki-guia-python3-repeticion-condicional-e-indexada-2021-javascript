
//  def test_productoria_de_1_a_9_es_362880(self):
//    self.assertEquals(productoria(range(1, 10)), 362880)

describe("", () => {
  it("productoria de la lista [10, 2, 3] es 60", () => {
    assert.deepEqual(productoria([10, 2, 3]), 60);
  })
  it("productoria de la lista [3, 3, 2, 4] es 72", () => {
    assert.deepEqual(productoria([3, 3, 2, 4]), 72);
  })
  it("productoria de la lista [8] es 8", () => {
    assert.deepEqual(productoria([8]), 8);
  })
  it("productoria de la lista [6] es 6", () => {
    assert.deepEqual(productoria([6]), 6);
  })
  it("productoria de la lista vacía es 1", () => {
    assert.deepEqual(productoria([]), 1);
  })
})