import type { DynamicShortcut } from 'unocss'

export type ButtonType = 'button' | 'submit' | 'reset'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonSize = 'default' | 'block' | 'sm' | 'md' | 'lg'

export enum btnType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum btnVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum btnSize {
  DEFAULT = 'default',
  BLOCK = 'block',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export const btnShortcuts: DynamicShortcut[] = [
  [
    /^btn-(?!.*(outline|flat|transparent|block|sm|md|lg|default))(.*)/,
    ([, , c]) =>
      `important-bg-${c}-400
      text-white
      border-transparent
      hover:shadow-${c}
      hover:shadow-button
      focus:outline-none
      focus:ring-2
      focus:ring-opacity-75
      focus:ring-${c}-400`,
  ],
  [
    /^btn-outline-(.*)$/,
    ([, c]) =>
      `bg-transparent 
      border-${c}-400 
      text-${c}-400 
      hover:text-${c}-500 
      hover:shadow-${c} 
      hover:shadow-button 
      focus:outline-none 
      focus:ring-2 
      focus:ring-opacity-75 
      focus:ring-${c}-400`,
  ],
  [/^btn-flat-(.*)$/, ([, c]) => `bg-gray-50 border-transparent text-${c}-400 hover:text-${c}-600`],
  [
    /^btn-transparent-(.*)$/,
    ([, c]) => `bg-transparent border-transparent text-${c}-400 hover:text-${c}-600 dark:text-${c}-100`,
  ],
]

export const btnSafelist = [
  ...Object.values(btnVariant).map(v => `btn-${v}`),
  ...Object.values(btnVariant).map(v => `btn-outline-${v}`),
  ...Object.values(btnVariant).map(v => `btn-flat-${v}`),
  ...Object.values(btnVariant).map(v => `btn-transparent-${v}`),
  ...Object.values(btnSize).map(v => `btn-${v}`),
]

export const btnVariantList = Object.values(btnVariant)

export interface ButtonProps {
  /**
   * Represents the properties of a button component.
   */
  label?: string
  icon?: string
  iconRight?: string
  disabled?: boolean
  outline?: boolean
  link?: boolean
  target?: string
  variant?: string
  size?: string
  flat?: boolean
  transparent?: boolean
}

const AsBtnConsts = {
  btnType,
  btnVariant,
  btnSize,
  btnShortcuts,
  btnSafelist,
  btnVariantList,
}
export default AsBtnConsts
