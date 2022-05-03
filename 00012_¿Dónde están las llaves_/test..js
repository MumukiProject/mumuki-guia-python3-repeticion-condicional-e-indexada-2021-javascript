describe("", () => {
  it("las llaves están en primer lugar", () => {
    assert.deepEqual(dondeEstanLasLlaves("🔑🔥👓")), 1);
  })
  
  it("las llaves están en segundo lugar", () => {
    assert.deepEqual(dondeEstanLasLlaves("👓🔑🔥")), 2);
  })
})  
    
    