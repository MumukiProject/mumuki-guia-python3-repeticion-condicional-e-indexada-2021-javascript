class Test(unittest.TestCase):

  def test_las_llaves_estan_en_primer_lugar(self):
    self.assertEquals(donde_estan_las_llaves("🔑🔥👓"), 1)
    
  def test_las_llaves_estan_en_segundo_lugar(self):
    self.assertEquals(donde_estan_las_llaves("👓🔑🔥"), 2)