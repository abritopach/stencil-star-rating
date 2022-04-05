import { action } from '@storybook/addon-actions';

window.addEventListener('ratingChange', (e: CustomEvent) => action('ratingChange')(e.detail));
window.addEventListener('starClicked', (e: CustomEvent) => action('starClicked')(e.detail));


export default {
    title: 'Components/Star Rating Component',
    argTypes: {
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select', required: false }
        },
        color: {
            options: ['danger', 'warning', 'success', 'info'],
            control: { type: 'select', required: false }
        },
        label: {
            name: 'label',
            type: { name: 'string', required: false },
            control: {
                type: null
            }
        }
    },
};

const Template = (args) =>
`<star-rating-component
    stars="${args.stars}"
    size="${args.size}"
    color="${args.color}"
    rating="${args.rating}"
    step="${args.step}"
    gap="${args.gap}"
    label="${args.label}">
</star-rating-component>`;

// Basic example
export const Example = Template.bind({});
Example.args = {
    stars: 5,
    color: 'warning'
};
Example.storyName = 'Basic example';

// Size example
export const ExampleSize = Template.bind({});
ExampleSize.args = {
    stars: 5,
    size: 'medium',
    color: 'warning'
};
ExampleSize.storyName = 'Size example';

// Color example
export const ExampleColor = Template.bind({});
ExampleColor.args = {
    stars: 5,
    size: 'medium',
    color: 'danger'
};
ExampleColor.storyName = 'Color example';

// Default rating value example
export const ExampleDefaultRating = Template.bind({});
ExampleDefaultRating.args = {
    stars: 5,
    size: 'medium',
    rating: 3,
    color: 'warning'
};
ExampleDefaultRating.storyName = 'Default rating value example';

// Stars step example
export const ExampleStarsStep = Template.bind({});
ExampleStarsStep.args = {
    stars: 5,
    size: 'medium',
    rating: 3,
    step: 0.5,
    color: 'warning'
};
ExampleDefaultRating.storyName = 'Stars step example';

// Label example
export const ExampleLabel = Template.bind({});
ExampleLabel.args = {
    stars: 5,
    size: 'medium',
    rating: 3,
    step: 0.5,
    label: '{"text": "Label bottom", "position": "bottom"}',
    color: 'warning'
};
ExampleLabel.storyName = 'Label example';