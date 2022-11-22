import styled, { css } from 'styled-components'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

const Root = styled(CheckboxPrimitive.Root)`
  ${({ theme, checked }) => css`
    all: unset;
    box-sizing: border-box;
    border-radius: ${theme['border-radius'][200]}px;
    border: solid ${theme.colors.primary.strong} 2px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.white};
    width: 20px;
    height: 20px;

    // Hover styles
    &:hover {
      background-color: ${theme.colors.neutral.softer};
    }

    // Focus
    &:focus {
      box-shadow: 0 0 0 4px ${theme.colors.primary.softer};
    }

    // Checked
    &[data-state='checked'],
    &[data-state='indeterminate'] {
      background-color: ${theme.colors.primary.strong};
    }

    // Disabled
    &[data-disabled] {
      ${checked
        ? { backgroundColor: theme.colors.neutral.base }
        : { backgroundColor: theme.colors.white }}
      color: ${theme.colors.white};
      border: solid ${theme.colors.neutral.base} 2px;
      cursor: not-allowed;
    }
  `}
`

const Indicator = styled(CheckboxPrimitive.Indicator)``

const Label = styled('label')`
  &:empty {
    display: none;
  }
`

export const Checkbox = {
  Root,
  Indicator,
  Label,
}
