import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wx-button',
  styleUrl: 'wx-button.scss',
  shadow: true,
})
export class WxButton {

  @Prop() color: string;

  render() {
    return (
      <Host>
        <button
          type="button"
          class={`button ${this.color}`}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
