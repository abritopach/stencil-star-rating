import { Component, Host, h, Prop } from '@stencil/core';

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
            <ion-icon name="star-outline" ></ion-icon>
          ))
        }
      </Host>
    );
  }

}
