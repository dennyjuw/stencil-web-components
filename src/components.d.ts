/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WxButton {
        "color": string;
    }
    interface WxProduct {
        "id": string;
        "price": number;
        "shoppingList": boolean;
        "shoppingListAmount": number;
        "shortDescription": string;
        "title": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWxButtonElement extends Components.WxButton, HTMLStencilElement {
    }
    var HTMLWxButtonElement: {
        prototype: HTMLWxButtonElement;
        new (): HTMLWxButtonElement;
    };
    interface HTMLWxProductElement extends Components.WxProduct, HTMLStencilElement {
    }
    var HTMLWxProductElement: {
        prototype: HTMLWxProductElement;
        new (): HTMLWxProductElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "wx-button": HTMLWxButtonElement;
        "wx-product": HTMLWxProductElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WxButton {
        "color"?: string;
        "onButtonClicked"?: (event: CustomEvent<any>) => void;
    }
    interface WxProduct {
        "id"?: string;
        "onAddToShoppingList"?: (event: CustomEvent<any>) => void;
        "price"?: number;
        "shoppingList"?: boolean;
        "shoppingListAmount"?: number;
        "shortDescription"?: string;
        "title"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "wx-button": WxButton;
        "wx-product": WxProduct;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "wx-button": LocalJSX.WxButton & JSXBase.HTMLAttributes<HTMLWxButtonElement>;
            "wx-product": LocalJSX.WxProduct & JSXBase.HTMLAttributes<HTMLWxProductElement>;
        }
    }
}
