import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { Color, Size } from '../../enums/enums';
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

  /**
  * Possible color for the stars.
  * Options: danger, warning, success and info
  * Default: warning
  */
  @Prop() color: Color = Color.WARNING;

  /**
  * The actual star rating value.
  * Default: 0
  */
  @Prop() rating: number = 0;

  @State() currentRating: number;
  @State() starsSelected: Array<Star>;

  @Event() ratingChange: EventEmitter<number>;

  componentWillLoad() {
    const defaultStar: Star = {selected: false, value: 0};
    this.starsSelected = new Array<Star>(this.stars).fill(defaultStar);
    if (this.rating !== 0) {
      this.starsSelected = [...this.starsSelected.map((star, index) => {
        return (index < this.rating) ? {...star, selected: true, value: 1} : {...star, selected: false, value: 0};
      })];
    }
  }

  render() {
    return (
      <Host>
        {
          Array.from(Array(this.stars).keys()).map((_, index) => (
            <ion-icon
              class={`size-${this.size} ${this.color}`}
              name={this.starsSelected[index].selected ? 'star' : 'star-outline'}
              onClick={_ => this.onClickStarHandler(index)}>
            </ion-icon>
          ))
        }
      </Host>
    );
  }

  private onClickStarHandler(starIndex: number) {
    const starsToUpdate = this.starsSelected.filter((_, index) => index <= starIndex).map(star => {
      return {...star, selected: true, value: 1};
    });
    const otherStars = this.starsSelected.slice(starIndex + 1).map(star => {
      return {...star, selected: false, value: 0};
    });
    this.starsSelected = [...starsToUpdate, ...otherStars];
    this.ratingChange.emit(this.starsSelected.reduce((acc, star) => acc + star.value, 0));
  }
}
