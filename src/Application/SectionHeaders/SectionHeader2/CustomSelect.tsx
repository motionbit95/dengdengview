import {
  chakra,
  FormControlOptions,
  forwardRef as chakraForwardRef,
  HTMLChakraProps,
  omitThemingProps,
  ThemingProps,
  useFormControl,
  useMergeRefs,
  useMultiStyleConfig,
  usePopper,
} from '@chakra-ui/react'
import { mergeWith } from '@chakra-ui/utils'
import { useSelect } from 'downshift'
import {
  Children,
  cloneElement,
  ComponentProps,
  forwardRef,
  isValidElement,
  ReactElement,
  useMemo,
} from 'react'

export interface SelectProps
  extends FormControlOptions,
    ThemingProps<'Select'>,
    Omit<
      HTMLChakraProps<'button'>,
      'disabled' | 'required' | 'readOnly' | 'size' | 'value' | 'onChange'
    > {
  placeholder?: string
  value?: string | null | undefined
  onChange?: (item: string) => void
}

export const CustomSelect = forwardRef<HTMLButtonElement, SelectProps>((props, ownRef) => {
  const { id, value, children, placeholder, onChange, ...rest } = omitThemingProps(props)
  const ownButtonProps = useFormControl<HTMLButtonElement>(rest)
  const styles = useMultiStyleConfig('CustomSelect', props)

  const validChildren = useMemo(
    () =>
      Children.toArray(children)
        .filter<ReactElement<{ value: string; children?: ReactElement }>>(isValidElement)
        .filter((child) => 'value' in child.props),
    [children],
  )

  const items = validChildren.map((child) => child.props.value)

  const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, getItemProps } = useSelect({
    id,
    items,
    selectedItem: value,
    onSelectedItemChange: (val) => (val.selectedItem ? onChange?.(val.selectedItem) : undefined),
  })

  const { referenceRef: popperRef, getPopperProps } = usePopper({
    enabled: isOpen,
    gutter: 2,
  })
  const { ref: useSelectToggleButtonRef, ...useSelectToggleButtonProps } = getToggleButtonProps()

  const toggleButtonRef = useMergeRefs(ownRef, useSelectToggleButtonRef, popperRef)
  const toggleButtonProps = mergeWith(ownButtonProps, useSelectToggleButtonProps)

  return (
    <chakra.div position="relative">
      <chakra.button ref={toggleButtonRef} __css={styles.field} {...toggleButtonProps}>
        {validChildren.find((child) => child.props.value === selectedItem)?.props.children ||
          selectedItem || <chakra.span>{placeholder}</chakra.span>}
        <SelectIcon />
      </chakra.button>
      <chakra.div
        zIndex="1"
        width="100%"
        {...mergeWith(getPopperProps(), {
          style: { visibility: isOpen ? 'visible' : 'hidden' },
        })}
      >
        <chakra.ul __css={styles.menu} {...getMenuProps()}>
          {isOpen &&
            validChildren.map((item, index) =>
              cloneElement(item, {
                __css: styles.option,
                ...getItemProps({ item: item.props.value, index }),
              }),
            )}
        </chakra.ul>
      </chakra.div>
    </chakra.div>
  )
})

CustomSelect.displayName = 'CustomSelect'

export interface OptionProps extends HTMLChakraProps<'li'>, ThemingProps {
  value: string
}

export const Option = chakraForwardRef<OptionProps, 'li'>((props, ref) => {
  const { children, value, ...rest } = omitThemingProps(props)
  const { option } = useMultiStyleConfig('CustomSelect', props)
  return (
    <chakra.li ref={ref} __css={option} {...rest}>
      {children || value}
    </chakra.li>
  )
})

const DefaultIcon = (props: ComponentProps<'svg'>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
)

const SelectIcon = (props: ComponentProps<'svg'>) => (
  <DefaultIcon
    style={{ width: '1em', height: '1em', color: 'currentColor' }}
    role="presentation"
    focusable={false}
    aria-hidden
    {...props}
  />
)
