import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'star-rating-component',
  styleUrl: 'star-rating-component.css',
  shadow: true,
})
export class StarRatingComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
