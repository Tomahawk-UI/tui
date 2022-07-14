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

export const LoremIpsum: ComponentStory<typeof Typography> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
)

LoremIpsum.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis qui veniam molestias veritatis sequi unde similique provident non odio ipsa error, ratione dolor quibusdam hic sunt laboriosam ipsam nostrum illo nulla earum, incidunt odit voluptate pariatur? Velit perferendis sequi aut ullam culpa! Veniam quisquam molestiae obcaecati nesciunt voluptas nobis veritatis laborum vitae quaerat, quam qui praesentium aliquid ab officia blanditiis! Atque sed labore, exercitationem facilis voluptatibus et, est debitis architecto perferendis sit id rerum accusantium. Consequuntur quasi magni hic laboriosam rem illum, similique recusandae nulla, id atque corporis placeat eligendi aspernatur eaque quis minus ab dolorum praesentium, fugit eius debitis?',
}
