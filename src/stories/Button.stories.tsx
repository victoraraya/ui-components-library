import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../packages';

const stories = storiesOf('Buttons', module);

stories.add('Primary', () => {
    return <Button text="Hey!" />;
});
