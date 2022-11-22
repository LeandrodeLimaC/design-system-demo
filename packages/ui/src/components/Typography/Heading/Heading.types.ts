type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4'
type HeadingVariants = 'heading1' | 'heading2' | 'heading3' | 'heading4'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Representa o nível semântico de título que será renderizado no DOM.
   * Não altera a forma como o componente é apresentado/exibido
   * */
  level?: HeadingLevels
  /** Tipo de estilo do cabeçalho a ser utilizado */
  variant?: HeadingVariants
  /** Texto do cabeçalho */
  children: string
}

type BaseHeadingProps = Required<Pick<HeadingProps, 'variant'>>

export type { HeadingLevels, HeadingVariants, HeadingProps, BaseHeadingProps }
