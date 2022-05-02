
    
  def test_extremos_de_la_lista_4_5_10_2_3_devuelve_la_lista_4_3(self):
    self.assertEquals(extremos([4, 5, 10, 2, 3]), [4, 3])
    
  def test_extremos_de_la_lista_4_3_devuelve_la_lista_4_3(self):
    self.assertEquals(extremos([4, 3]), [4, 3])
    
  def test_extremos_de_la_lista_1_2_5_devuelve_la_lista_1_5(self):
    self.assertEquals(extremos([1, 2, 5]), [1, 5])      


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
  it("contiene([1, 8, 5], 7) es false", () => {
    assert(!contiene([1, 8, 5], 7));
  })
  it("contiene([1, 1, 1], 1) es true", () => {
    assert(contiene([1, 1, 1], 1));
  })
})