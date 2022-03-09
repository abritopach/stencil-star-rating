import { Component, Host, h, Prop, State } from '@stencil/core';
import { Size } from '../../enums/enums';
import { Star } from '../../models/start.model';

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

  @State() currentRating: number;
  @State() starsSelected: Array<Star>;

  componentWillLoad() {
    console.log('StarRatingComponent::componentWillLoad method called');
    const defaultStar: Star = {selected: false, value: 0};
    this.starsSelected = new Array<Star>(this.stars).fill(defaultStar);
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
              name={this.starsSelected[index].selected ? 'star' : 'star-outline'}
              onClick={_ => this.onClickStarHandler(index)}>
            </ion-icon>
          ))
        }
      </Host>
    );
  }

  private onClickStarHandler(starIndex: number) {
    console.log('StarRatingComponent::onClickStarHandler method called with clicked star: ', starIndex);
    const starSelected = {...this.starsSelected[starIndex], selected: !this.starsSelected[starIndex].selected,
    value: this.starsSelected[starIndex].selected ? 0 : 1};
    this.starsSelected = [...this.starsSelected.slice(0, starIndex), starSelected, ...this.starsSelected.slice(starIndex + 1)];
    console.log('starsSelected: ', this.starsSelected);
  }
}
