import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wx-product',
  styleUrl: 'wx-product.scss',
  shadow: true,
})
export class WxProduct {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
