import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      options: [false, true, 'indeterminate'],
      control: { type: 'inline-radio' },
    },
    defaultChecked: {
      options: [false, true, 'indeterminate'],
      control: { type: 'inline-radio' },
    },
    onCheckedChange: {
      defaultValue: false,
    },
  },
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {
  args: {
    children: 'Checkbox label',
  },
}

export const WithoutLabel: StoryObj<CheckboxProps> = {
  parameters: {
    docs: {
      description: {
        story: 'A aparência/variação do Título',
      },
    },
  },
  args: {
    children: '',
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  decorators: [
    () => (
      <ol>
        <li style={{ marginBlock: '1rem' }}>
          <Checkbox checked={false} disabled>
            Checkbox label
          </Checkbox>
        </li>

        <li style={{ marginBlock: '1rem' }}>
          <Checkbox disabled>Checkbox label</Checkbox>
        </li>

        <li style={{ marginBlock: '1rem' }}>
          <Checkbox checked={true} disabled>
            Checkbox label
          </Checkbox>
        </li>
      </ol>
    ),
  ],
}
