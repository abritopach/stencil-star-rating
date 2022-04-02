export default {
    title: 'Components/Star Rating Component',
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' }
        }
    },
};

const Template = (args) =>
`<star-rating-component
    stars="${args.stars}"
    size="${args.size}"
    rating="${args.rating}"
    step="${args.step}"
    gap="${args.gap}">
</star-rating-component>`;

export const Example = Template.bind({});
Example.args = {
    stars: 5
};
Example.storyName = 'Basic example';

export const ExampleSize = Template.bind({});
ExampleSize.args = {
    stars: 5,
    size: 'medium'
};
ExampleSize.storyName = 'Size example';


export const ExampleDefaultRating = Template.bind({});
ExampleDefaultRating.args = {
    stars: 5,
    size: 'medium',
    rating: 3
};
ExampleDefaultRating.storyName = 'Default rating value example';