describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    
    await waitFor(element(by.id('mybutton'))).toBeVisible().withTimeout(3000);
        await element(by.id('mybutton')).tap();
        
        await expect(element(by.id('mybutton'))).toBeNotVisible();
  });
/* 
  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });
 
  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  }); */
});

