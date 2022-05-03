describe("", () => {
  it("juntar super califragilistico espialidoso retorna supercalifragilisticoespialidoso", () => {
    assert.deepEqual(juntar(["super", "califragilistico", "espialidoso"]), "supercalifragilisticoespialidoso");
  })
  
  it("juntar lista vacía retorna un string vacio", () => {
    assert.deepEqual(juntar([]), "");
  })
  
  it("juntar cuatri motor retorna cuatrimotor", () => {
    assert.deepEqual(juntar(["cuatri", "motor"]), "cuatrimotor");
  })
})