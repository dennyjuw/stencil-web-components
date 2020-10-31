import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wx-product',
  styleUrl: 'wx-product.scss',
  shadow: true,
})
export class WxProduct {

  @Prop() title: string;
  @Prop() shortDescription: string;
  @Prop() price: number;
  @Prop() amount: number;

  render() {
    return (
      <Host>
        <div class="product d-flex justify-content-between align-items-center">
          <div>
            <div class="title">{ this.title }</div>
            <div class="description">{ this.shortDescription }</div>
          </div>
          <div class="d-flex align-items-center">
            <div class="price">
              ${ this.price } ea.
            </div>
            <input class="amount" type="number" />
            <wx-button color="primary">
              Add
            </wx-button>
          </div>
        </div>
      </Host>
    );
  }

}
