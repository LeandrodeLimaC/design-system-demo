import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Heading, HeadingProps } from '.'

export default {
  component: Heading,
  parameters: {
    componentSubtitle: 'Componente que agrupa as variações de títulos',
    controls: { sort: 'requiredFirst' },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    level: {
      control: { type: 'select', sort: 'alphabetical' },
    },
  },
} as Meta<HeadingProps>

const Default: StoryObj<HeadingProps> = {
  args: {
    children: 'Heading (Padrão)',
  },
}

const Level: StoryObj<HeadingProps> = {
  parameters: {
    docs: {
      description: {
        story:
          'Nível semântico do Título que será renderizado no DOM (é necessário inspecionar o elemento para ver o resultado no DOM)',
      },
    },
  },
  args: {
    children: 'Heading2 no nível h4',
    level: 'h4',
    variant: 'heading2',
  },
}

const Variant: StoryObj<HeadingProps> = {
  parameters: {
    docs: {
      description: {
        story: 'A aparência/variação do Título',
      },
    },
  },
  decorators: [
    () => {
      return (
        <ul>
          <li>
            <span>Heading 1</span>
            <Heading variant="heading1">Heading</Heading>
            <br />
          </li>

          <li>
            <span>Heading 2</span>
            <Heading variant="heading2">Heading</Heading>
            <br />
          </li>

          <li>
            <span>Heading 3</span>
            <Heading variant="heading3">Heading</Heading>
            <br />
          </li>

          <li>
            <span>Heading 4</span>
            <Heading variant="heading4">Heading</Heading>
            <br />
          </li>
        </ul>
      )
    },
  ],
}

export { Default, Level, Variant }
