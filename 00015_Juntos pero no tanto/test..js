
describe("", () => {
  it("juntar super califragilistico espialidoso retorna supercalifragilisticoespialidoso", () => {
    assert.deepEqual(juntar("", ["super", "califragilistico", "espialidoso"]), "supercalifragilisticoespialidoso");
  })
  
  it("juntar cuatri motor retorna cuatrimotor", () => {
    assert.deepEqual(juntar("", ["cuatri", "motor"]), "cuatrimotor");
  })
  
  it("juntar hola mundo con un espacio retorna hola mundo", () => {
    assert.deepEqual(juntar(" ", ["hola", "mundo"]), "hola mundo");
  })
  it("juntar hola mundo con un una coma retorna hola, mundo", () => {
    assert.deepEqual(juntar(",", ["hola", "mundo"]), "hola,mundo");
  })
})  
    
    