describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display loader and then fetched data', async () => {
    await element(by.id('fetchButton')).tap();
    // await expect(element(by.id('loadTestLabel'))).toExist();

    await waitFor(element(by.id('dataList'))).toExist().withTimeout(10000);
    await expect(element(by.id('dataList'))).toBeVisible();
  });
});
