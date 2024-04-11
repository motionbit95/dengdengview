import { Box, Popover } from '@chakra-ui/react'
import { CheckboxFilter } from './CheckboxFilter'
import { ColorPicker } from './ColorPicker'
import { PriceRangePicker } from './PriceRangePicker'
import { formatPrice } from './PriceTag'
import { SizePicker } from './SizePicker'
import { FilterPopoverButton, FilterPopoverContent } from './FilterPopover'
import { blueFilters, colorFilter, priceFilter, sizeFilter } from './_data'
import { useFilterState } from './useFilterState'

export const SizeFilterPopover = () => {
  const state = useFilterState({
    defaultValue: '32',
    onSubmit: console.log,
  })

  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Size" />
      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <SizePicker
          hideLabel
          value={state.value}
          onChange={state.onChange}
          options={sizeFilter.options}
        />
      </FilterPopoverContent>
    </Popover>
  )
}

export const PriceFilterPopover = () => {
  const state = useFilterState({
    defaultValue: priceFilter.defaultValue,
    onSubmit: console.log,
  })
  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Price" />

      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <Box px="2" pt="2">
          <PriceRangePicker
            step={10}
            min={priceFilter.min}
            max={priceFilter.max}
            value={state.value}
            onChange={state.onChange}
          />
          <Box as="output" mt="2" fontSize="sm">
            {state.value?.map((v) => formatPrice(v)).join(' — ')}
          </Box>
        </Box>
      </FilterPopoverContent>
    </Popover>
  )
}

export const CheckboxFilterPopover = () => {
  const state = useFilterState({
    defaultValue: blueFilters.defaultValue,
    onSubmit: console.log,
  })
  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Brand" />
      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <CheckboxFilter
          hideLabel
          value={state.value}
          onChange={(v) => state.onChange(v)}
          options={blueFilters.options}
        />
      </FilterPopoverContent>
    </Popover>
  )
}

export const ColorFilterPopover = () => {
  const state = useFilterState({
    defaultValue: colorFilter.defaultValue,
    onSubmit: console.log,
  })
  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Color" />

      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <ColorPicker
          hideLabel
          value={state.value}
          onChange={state.onChange}
          options={colorFilter.options}
        />
      </FilterPopoverContent>
    </Popover>
  )
}
