import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { Color, Gap, Size } from '../../enums/enums';
import { Label, Star } from '../../models/start.model';

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

  /**
   * The step interval of the stars.
   * Default: 1
   */
  @Prop() step: number = 1;

  /**
   * Text to be displayed next to the stars.
   * Default: null
   */
  @Prop() label: Label = null;

  /**
   * The size of gutters, which is the space between one star and other star.
   * Default: 1
   */
  @Prop() gap: Gap = Gap.DEFAULT;


  /**
  * readOnly: boolean.
  * The onClick callback is disabled.
  * Default: false
  */
  @Prop() readonly: boolean = false;

  @State() currentRating: number;
  @State() starsSelected: Array<Star>;

  @Event() ratingChange: EventEmitter<number>;
  @Event() starClicked: EventEmitter<Star & {star: number}>;

  componentWillLoad() {
    const defaultStar: Star = {selected: false, value: 0};
    this.starsSelected = new Array<Star>(this.stars).fill(defaultStar);
    if (this.rating !== 0) {
      this.starsSelected = [...this.starsSelected.map((star, index) => {
        return (index < this.rating) ? {...star, selected: true, value: this.step} : {...star, selected: false, value: 0};
      })];
    }
  }

  render() {
    return (
      <Host>
        {
          Array.from(Array(this.stars).keys()).map((_, index) => (
            <ion-icon
              class={`size-${this.size} ${this.color} gap-${this.gap}`}
              name={this.starsSelected[index].selected ? 'star' : 'star-outline'}
              onClick={_ => this.readonly ? null : this.onClickStarHandler(index)}>
            </ion-icon>
          ))
        }
      </Host>
    );
  }

  private onClickStarHandler(starIndex: number) {
    const starsToUpdate = this.starsSelected.filter((_, index) => index <= starIndex).map(star => {
      return {...star, selected: true, value: this.step};
    });
    const otherStars = this.starsSelected.slice(starIndex + 1).map(star => {
      return {...star, selected: false, value: 0};
    });
    this.starsSelected = [...starsToUpdate, ...otherStars];
    this.ratingChange.emit(this.starsSelected.reduce((acc, star) => acc + star.value, 0));
    this.starClicked.emit({...this.starsSelected[starIndex], star: starIndex + 1});
  }
}
