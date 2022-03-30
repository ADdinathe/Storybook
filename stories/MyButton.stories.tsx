import * as React from "react";
import {Meta, Story} from '@storybook/react';
import {MyButton, MyButtonProps} from '../src/MyButton';
import {action} from '@storybook/addon-actions'


const meta: Meta = {
    title: 'MyButton',
    component: MyButton,
    argTypes: {
        onClick: {action: 'clicked'},
        variant: {
            options: ['primary', 'secondary'],
            control: {type: 'radio'},
        },
        children: {
            defaultValue: 'Default text',
            control: {
                type: 'text',
            },
        }
    },
    parameters: {
        controls: {expanded: true},
    },
}

export default meta;

const Template: Story<MyButtonProps> = (args) => <MyButton {...args} />;

// export const Default = () => <MyButton variant="primary">MYBUTTON</MyButton>
//
// export const Secondary = () => <MyButton variant="secondary">MYBUTTON</MyButton>
//
export const Default = Template.bind({});
Default.args = {};


export const Secondary = Template.bind({});

Secondary.args = {
    children: 'i am fucked',
    variant: 'secondary',
    onClick: action('second clicked')
};

export const Thirdty = Template.bind({});

Thirdty.args = {
    children: 'da blyat',
};