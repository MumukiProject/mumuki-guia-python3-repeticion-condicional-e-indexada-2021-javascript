class Test(unittest.TestCase):

  def test_cuantas_veces_entreno_lo_suficiente_con_35_40_32_60_es_4(self):
    self.assertEquals(cuantas_veces_entreno_lo_suficiente([35, 40, 32, 60]), 4)
    
  def test_cuantas_veces_entreno_lo_suficiente_con_15_45_90_0_es_2(self):
    self.assertEquals(cuantas_veces_entreno_lo_suficiente([15, 45, 90, 0]), 2)
    