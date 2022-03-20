/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color, Gap, Size } from "./enums/enums";
import { Star } from "./models/start.model";
export namespace Components {
    interface StarRatingComponent {
        /**
          * Possible color for the stars. Options: danger, warning, success and info Default: warning
         */
        "color": Color;
        /**
          * The size of gutters, which is the space between one star and other star. Default: 1
         */
        "gap": Gap;
        /**
          * Text to be displayed next to the stars. Default: null
         */
        "label": string;
        /**
          * The actual star rating value. Default: 0
         */
        "rating": number;
        /**
          * readOnly: boolean. The onClick callback is disabled. Default: false
         */
        "readonly": boolean;
        /**
          * The size of the stars. Options: small, medium, large Default: medium
         */
        "size": Size;
        /**
          * Number of stars to display. Default: 5
         */
        "stars": number;
        /**
          * The step interval of the stars. Default: 1
         */
        "step": number;
    }
}
declare global {
    interface HTMLStarRatingComponentElement extends Components.StarRatingComponent, HTMLStencilElement {
    }
    var HTMLStarRatingComponentElement: {
        prototype: HTMLStarRatingComponentElement;
        new (): HTMLStarRatingComponentElement;
    };
    interface HTMLElementTagNameMap {
        "star-rating-component": HTMLStarRatingComponentElement;
    }
}
declare namespace LocalJSX {
    interface StarRatingComponent {
        /**
          * Possible color for the stars. Options: danger, warning, success and info Default: warning
         */
        "color"?: Color;
        /**
          * The size of gutters, which is the space between one star and other star. Default: 1
         */
        "gap"?: Gap;
        /**
          * Text to be displayed next to the stars. Default: null
         */
        "label"?: string;
        "onRatingChange"?: (event: CustomEvent<number>) => void;
        "onStarClicked"?: (event: CustomEvent<Star & {star: number}>) => void;
        /**
          * The actual star rating value. Default: 0
         */
        "rating"?: number;
        /**
          * readOnly: boolean. The onClick callback is disabled. Default: false
         */
        "readonly"?: boolean;
        /**
          * The size of the stars. Options: small, medium, large Default: medium
         */
        "size"?: Size;
        /**
          * Number of stars to display. Default: 5
         */
        "stars"?: number;
        /**
          * The step interval of the stars. Default: 1
         */
        "step"?: number;
    }
    interface IntrinsicElements {
        "star-rating-component": StarRatingComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "star-rating-component": LocalJSX.StarRatingComponent & JSXBase.HTMLAttributes<HTMLStarRatingComponentElement>;
        }
    }
}
