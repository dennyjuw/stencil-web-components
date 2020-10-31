import { newE2EPage } from '@stencil/core/testing';

describe('wx-product', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wx-product></wx-product>');

    const element = await page.find('wx-product');
    expect(element).toHaveClass('hydrated');
  });
});
