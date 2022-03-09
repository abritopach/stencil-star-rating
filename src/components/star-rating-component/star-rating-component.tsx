import { Component, Host, h, Prop } from '@stencil/core';
import { Size } from '../../enums/enums';

@Component({
  tag: 'star-rating-component',
  styleUrl: 'star-rating-component.css',
  shadow: true,
})
export class StarRatingComponent {

  /**
   * Number of stars to display.
   * Default: 5
   */
  @Prop() stars: number = 5;

  /**
  * The size of the stars.
  * Options: small, medium, large
  * Default: medium
  */
  @Prop() size: Size = Size.MEDIUM;

  componentWillLoad() {
    console.log('StarRatingComponent::componentWillLoad method called');
  }


  componentDidLoad() {
    console.log('StarRatingComponent::componentDidLoad method called');
  }

  render() {
    return (
      <Host>
        {
          Array.from(Array(this.stars).keys()).map(_ => (
            <ion-icon class={`size-${this.size}`} name="star-outline"></ion-icon>
          ))
        }
      </Host>
    );
  }

}
