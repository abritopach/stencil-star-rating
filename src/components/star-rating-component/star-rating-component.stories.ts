export default {
    title: 'Components/Star Rating Component',
};

const Template = (args) => `<star-rating-component stars="${args.stars}"></star-rating-component>`;

export const Example = Template.bind({});
Example.args = {
    stars: 5,
};