describe("", () => {
  it("cuantas veces entrenĂ³ lo suficiente con [35, 40, 32, 60] es 4", () => {
    assert.deepEqual(cuantasVecesEntrenoLoSuficiente([35, 40, 32, 60]), 4);
  })
  
  it("cuantas veces entrenĂ³ lo suficiente con [15, 45, 90, 0]", () => {
    assert.deepEqual(cuantasVecesEntrenoLoSuficiente([15, 45, 90, 0]), 2);
  })
})  
    
    