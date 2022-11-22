import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

type CheckedState = CheckboxPrimitive.CheckedState

type PrimitiveCheckboxPropsWithoutAsChild = Omit<
  CheckboxPrimitive.CheckboxProps,
  'asChild'
>

interface CheckboxProps extends PrimitiveCheckboxPropsWithoutAsChild {
  /**
   * Estado padrão no qual o checkbox será inicializado
   */
  defaultChecked?: CheckedState
  /**
   * Estado em que o checkbox se encontra.
   * Por padrão, se não for definido, será o
   * mesmo valor definido na propriedade defaultChecked
   */
  checked?: CheckedState
  /** Label do checkbox */
  children: string
  /**
   * Função Callback que será executada quando o Checkbox
   * tiver seu estado alterado
   * */
  onCheckedChange?: (checked: CheckedState) => void
}

export type { CheckboxProps, CheckedState }
