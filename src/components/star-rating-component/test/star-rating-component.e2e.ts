import { newE2EPage } from '@stencil/core/testing';

describe('star-rating-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<star-rating-component></star-rating-component>');

    const element = await page.find('star-rating-component');
    expect(element).toHaveClass('hydrated');
  });
});
