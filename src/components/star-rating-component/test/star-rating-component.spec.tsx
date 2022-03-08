import { newSpecPage } from '@stencil/core/testing';
import { StarRatingComponent } from '../star-rating-component';

describe('star-rating-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StarRatingComponent],
      html: `<star-rating-component></star-rating-component>`,
    });
    expect(page.root).toEqualHtml(`
      <star-rating-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </star-rating-component>
    `);
  });
});
