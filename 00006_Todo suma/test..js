class Test(unittest.TestCase):

  def test_productoria_de_10_2_3_es_60(self):
    self.assertEquals(productoria([10, 2, 3]), 60)

  def test_productoria_de_3_3_2_4_es_72(self):
    self.assertEquals(productoria([3, 3, 2, 4]), 72)

  def test_productoria_de_8_es_8(self):
    self.assertEquals(productoria([8]), 8)

  def test_productoria_de_1_a_9_es_362880(self):
    self.assertEquals(productoria(range(1, 10)), 362880)

  def test_productoria_de_6_es_6(self):
    self.assertEquals(productoria([6]), 6)

  def test_productoria_de_lista_vacia_es_1(self):
    self.assertEquals(productoria([]), 1)