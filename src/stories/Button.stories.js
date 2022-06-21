import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '@airmiles-ui/button';

const stories = storiesOf('Buttons', module);

stories.add('Primary', () => {
    return <Button />;
});
