import { newSpecPage } from '@stencil/core/testing';
import { WxProduct } from '../wx-product';

describe('wx-product', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WxProduct],
      html: `<wx-product></wx-product>`,
    });
    expect(page.root).toEqualHtml(`
      <wx-product>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wx-product>
    `);
  });
});
