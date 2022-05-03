class Test(unittest.TestCase):

  def test_juntar_super_califragilistico_espialidoso_devuelve_supercalifragilisticoespialidoso(self):
    self.assertEqual(juntar(["super", "califragilistico", "espialidoso"]), "supercalifragilisticoespialidoso")
    
  def test_juntar_lista_vacia_devuelve_string_vacio(self):
    self.assertEqual(juntar([]), "")
    
  
  def test_juntar_cuatri_motor_devuelve_cuatrimotor(self):
    self.assertEqual(juntar(["cuatri", "motor"]), "cuatrimotor")
    
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