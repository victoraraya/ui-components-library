import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from '@airmiles-ui/title';

const stories = storiesOf('Titles', module);

stories.add('h1', () => {
    return <Title>Hey! i'm a big title h1</Title>;
});

stories.add('h2', () => {
    return <Title h2>Hey! i'm a big title h2</Title>;
});
