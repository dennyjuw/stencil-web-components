import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wx-product',
  styleUrl: 'wx-product.scss',
  shadow: true,
})
export class WxProduct {

  @Prop() id: string;
  @Prop() title: string;
  @Prop() shortDescription: string;
  @Prop() price: number;
  @Prop() shoppingListAmount: number;
  @Prop() shoppingList: boolean = false;

  @Event() addToShoppingList: EventEmitter;

  @State() amount: number = 0;

  addToWishList(e) {
    console.log(this.amount);
    this.addToShoppingList.emit({id: this.id, amount: this.amount})
  }

  onAmountUpdate(e) {
    this.amount = e.target.value;
  }

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
            {
              this.shoppingList
              ? <div> x { this.shoppingListAmount }</div>
              : <input class="amount" type="number" min="0" max="99" value={ this.amount } onInput={(e) => this.onAmountUpdate(e)} />
            }
            <wx-button color="primary" onButtonClicked={(e) => this.addToWishList(e)}>
              Add
            </wx-button>
          </div>
        </div>
      </Host>
    );
  }

}
