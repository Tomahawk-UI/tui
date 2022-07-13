import * as React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Typography from '../packages/typography/src/Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small', 'caption'] },
    color: { control: 'color' },
    className: { control: 'text' },
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small', 'caption'] },
    children: { control: 'text', defaultValue: 'Hello World' },
  },
} as ComponentMeta<typeof Typography>

export const Default: ComponentStory<typeof Typography> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
)
