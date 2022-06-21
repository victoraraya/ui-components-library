import React from 'react';
import { storiesOf } from '@storybook/react';

import { Title } from '../packages';

const stories = storiesOf('Titles', module);

stories.add('h1', () => {
    return <Title text="Hey! i'm a big title h1" />;
});
