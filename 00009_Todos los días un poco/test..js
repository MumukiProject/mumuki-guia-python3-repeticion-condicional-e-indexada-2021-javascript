class Test(unittest.TestCase):

  def test_todos_los_dias_un_poco_con_35_40_32_60_es_True(self):
    self.assertTrue(todos_los_dias_un_poco([35, 40, 32, 60]))
    
  def test_todos_los_dias_un_poco_con_15_45_90_0_es_False(self):
    self.assertFalse(todos_los_dias_un_poco([15, 45, 90, 0]))
    