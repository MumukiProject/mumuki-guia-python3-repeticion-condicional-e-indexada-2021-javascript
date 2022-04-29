class Test(unittest.TestCase):

  def test_juntar_super_califragilistico_espialidoso_devuelve_supercalifragilisticoespialidoso(self):
    self.assertEqual(juntar(["super", "califragilistico", "espialidoso"]), "supercalifragilisticoespialidoso")
    
  def test_juntar_lista_vacia_devuelve_string_vacio(self):
    self.assertEqual(juntar([]), "")
    
  
  def test_juntar_cuatri_motor_devuelve_cuatrimotor(self):
    self.assertEqual(juntar(["cuatri", "motor"]), "cuatrimotor")