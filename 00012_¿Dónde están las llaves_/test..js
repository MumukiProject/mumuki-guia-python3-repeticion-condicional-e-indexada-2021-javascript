describe("", () => {
  it("las llaves estรกn en primer lugar", () => {
    assert.deepEqual(dondeEstanLasLlaves("๐๐ฅ๐"), 1);
  })
  
  it("las llaves estรกn en segundo lugar", () => {
    assert.deepEqual(dondeEstanLasLlaves("๐๐๐ฅ"), 2);
  })
})  
    
    