import { Component, Host, h, Prop, State } from '@stencil/core';
import { Size } from '../../enums/enums';

@Component({
  tag: 'star-rating-component',
  styleUrl: 'star-rating-component.css',
  shadow: true,
})
export class StarRatingComponent {

  @State() currentRating: number;

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

  private starsSelected: Array<boolean>;

  componentWillLoad() {
    console.log('StarRatingComponent::componentWillLoad method called');
    this.starsSelected = new Array<boolean>(this.stars).fill(false);
  }


  componentDidLoad() {
    console.log('StarRatingComponent::componentDidLoad method called');
  }

  render() {
    return (
      <Host>
        {
          Array.from(Array(this.stars).keys()).map((_, index) => (
            <ion-icon
              class={`size-${this.size}`}
              name={`${this.starsSelected[index] ? 'star' : 'star-outline'}`}
              onClick={_ => this.onClickStarHandler(index)}>
            </ion-icon>
          ))
        }
      </Host>
    );
  }

  private onClickStarHandler(starIndex: number) {
    console.log('StarRatingComponent::onClickStarHandler method called with clicked star: ', starIndex);
    this.starsSelected[starIndex] = !this.starsSelected[starIndex];
    console.log('starsSelected: ', this.starsSelected);
  }
}
