
export const buttonSizes = [
    'small',
    'medium',
    'large',
] as const
export type buttonSize = (typeof buttonSizes)[number]

export const variations = [
    'primary',
    'secondary',
    'teretary',
    'alert',
] as const
export type variation = (typeof variations)[number]

interface buttonObjects{
    size: buttonSize
    buttonType: variation
    isDisables?: boolean
    isLoading?: boolean
    isRounded?: boolean
}

${({ size }) =>
    match(size, {
      xs: () => css`
        ${horizontalPadding(8)}
        height: 28px;
        font-size: 12px;
      `,
      s: () => css`
        ${horizontalPadding(16)}
        height: 36px;
        font-size: 14px;
      `,
      m: () => css`
        ${horizontalPadding(20)}
        height: 40px;
        font-size: 14px;
      `,
      l: () => css`
        ${horizontalPadding(20)}
        height: 48px;
        font-size: 16px;
      `,
      xl: () => css`
        ${horizontalPadding(28)}
        height: 56px;
        font-size: 16px;
      `,
    })}

${({ kind }) =>
    match(kind, {
      primary: () => css`
        background: ${getColor('primary')};
        color: ${({ theme: { colors } }) =>
          colors.primary
            .getHighestContrast(colors.background, colors.contrast)
            .toCssValue()};
      `,
      secondary: () => css`
        background: ${getColor('secondary')};
        color: ${getColor('contrast')};
      `,
      alert: () => css`
        background: ${getColor('alert')};
        color: ${getColor('white')};
    })}