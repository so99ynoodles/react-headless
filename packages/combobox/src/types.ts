import { HTMLAttributes, ReactNode, Key } from 'react'
import { ComboBoxState } from '@react-stately/combobox'
import { AriaComboBoxProps } from '@react-types/combobox'
import { Node } from '@react-types/shared'

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]

type RequiredKeys = {
  key: Key
  id: Key
  [key: string | number]: any
}
export type ItemValueProps = RequireAtLeastOne<RequiredKeys, 'key' | 'id'>
export interface ComboBoxProps extends Omit<AriaComboBoxProps<ItemValueProps>, 'children'> {
  children?: ReactNode
  label?: string
}
export interface ComboBoxLabelProps extends HTMLAttributes<HTMLLabelElement> {}
export interface ComboBoxPopoverProps extends HTMLAttributes<HTMLDivElement> {}
export interface ComboBoxOptionsProps extends Omit<HTMLAttributes<HTMLUListElement>, 'children'> {
  children: ((props: { options: Node<ItemValueProps>[] }) => ReactNode) | ReactNode
}
export interface ComboBoxOptionProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children' | 'className'> {
  option: Node<ItemValueProps>
  className?:
    | string
    | ((props: { isDisabled: boolean; isSelected: boolean; isFocused: boolean; option: ItemValueProps }) => string)
  children:
    | ReactNode
    | ((props: { isDisabled: boolean; isSelected: boolean; isFocused: boolean; option: ItemValueProps }) => ReactNode)
}
export interface ComboBoxSectionProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  section: Node<ItemValueProps>
  children: ReactNode | ((props: { section: Node<ItemValueProps> }) => ReactNode)
}
export interface ComboBoxSectionOptionsProps extends HTMLAttributes<HTMLUListElement> {}
export interface ComboBoxSectionHeadingProps extends HTMLAttributes<HTMLSpanElement> {}
export interface ComboBoxInputGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'> {
  className?: string | ((props: { isFocused: boolean; isOpen: boolean; selectedItem: Node<ItemValueProps> }) => string)
  children:
    | ReactNode
    | ((props: { isFocused: boolean; isOpen: boolean; selectedItem: Node<ItemValueProps> }) => ReactNode)
}
export interface ComboBoxInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'className'> {
  className?: string | ((props: { isFocused: boolean }) => string)
}
export interface ComboBoxPopoverTriggerProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'placeholder' | 'children' | 'className'> {
  placeholder?: ReactNode
  children: ReactNode
  className?: string | ((props: ComboBoxState<ItemValueProps> & { isFocusVisible: boolean }) => string)
}
