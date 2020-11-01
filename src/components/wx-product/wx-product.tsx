import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'wx-product',
  styleUrl: 'wx-product.scss',
  shadow: true,
})
export class WxProduct {

  @Prop() productId: string;
  @Prop() productTitle: string;
  @Prop() shortDescription: string;
  @Prop() price: number;
  @Prop() shoppingListAmount: number;
  @Prop() shoppingList: boolean = false;

  @Event() addToShoppingList: EventEmitter;
  @Event() removeFromShoppingList: EventEmitter;

  @State() amount: number = 0;

  addToWishList() {
    this.addToShoppingList.emit({productId: this.productId, amount: this.amount});
  }

  removeFromWishList() {
    this.removeFromShoppingList.emit({productId: this.productId});
  }

  onAmountUpdate(e) {
    this.amount = e.target.value;
  }

  render() {
    return (
      <Host>
        <div class="product d-flex justify-content-between align-items-center">
          <div>
            <div class="title">{ this.productTitle }</div>
            <div class="description">{ this.shortDescription }</div>
          </div>
          <div class="d-flex align-items-center">

            <div class="price">
              ${ this.price } ea.
            </div>
            {
              this.shoppingList
              ?
              <div class="d-flex">
                <div class="mx-10">&nbsp;x { this.shoppingListAmount }</div>
                <wx-button color="primary" onButtonClicked={() => this.removeFromWishList()}>
                  Remove
                </wx-button>
              </div>
              :
              <div class="d-flex">
                <input class="amount" type="number" min="0" max="99" value={ this.amount } onInput={(e) => this.onAmountUpdate(e)} />
                <wx-button color="primary" onButtonClicked={() => this.addToWishList()}>
                  Add
                </wx-button>
              </div>
            }
          </div>
        </div>
      </Host>
    );
  }

}
