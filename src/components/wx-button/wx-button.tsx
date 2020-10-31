import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wx-button',
  styleUrl: 'wx-button.scss',
  shadow: true,
})
export class WxButton {

  @Prop() color: string;

  @Event() buttonClicked: EventEmitter;

  clickButton(e) {
    this.buttonClicked.emit(e);
  }

  render() {
    return (
      <Host>
        <button
          type="button"
          class={`button ${this.color}`}
          onClick={(e) => this.clickButton(e)}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
