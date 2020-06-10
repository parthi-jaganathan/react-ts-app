import React from 'react';
import { Hello } from '../src/components/Hello';

export default {
    title: 'Pages',
    component: Hello,
};

export const HelloReactStory = () => <Hello compiler="test" framework="framework" />;

HelloReactStory.story = {
    name: 'Hello React',
};