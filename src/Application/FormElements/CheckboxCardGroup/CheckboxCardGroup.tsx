import {
  Box,
  BoxProps,
  Checkbox,
  Stack,
  StackProps,
  useCheckbox,
  useCheckboxGroup,
  UseCheckboxGroupProps,
  UseCheckboxProps,
  useId,
  useStyleConfig,
} from "@chakra-ui/react";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactElement,
  useMemo,
} from "react";

type CheckboxCardGroupProps = StackProps & UseCheckboxGroupProps;

export const CheckboxCardGroup = (props: CheckboxCardGroupProps) => {
  const { children, defaultValue, value, onChange, ...rest } = props;
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue,
    value,
    onChange,
  });

  const cards = useMemo(
    () =>
      Children.toArray(children)
        .filter<ReactElement<RadioCardProps>>(isValidElement)
        .map((card) => {
          return cloneElement(card, {
            checkboxProps: getCheckboxProps({
              value: card.props.value,
            }),
          });
        }),
    [children, getCheckboxProps]
  );

  return <Stack {...rest}>{cards}</Stack>;
};

interface RadioCardProps extends BoxProps {
  value: string;
  checkboxProps?: UseCheckboxProps;
}

export const CheckboxCard = (props: RadioCardProps) => {
  const { checkboxProps, children, ...rest } = props;
  const { getInputProps, getCheckboxProps, getLabelProps, state } =
    useCheckbox(checkboxProps);
  const id = useId(undefined, "checkbox-card");
  const styles = useStyleConfig("RadioCard", props);

  return (
    <Box
      as="label"
      cursor="pointer"
      {...getLabelProps()}
      sx={{
        ".focus-visible + [data-focus]": {
          boxShadow: "outline",
          zIndex: 1,
        },
      }}
    >
      <input {...getInputProps()} aria-labelledby={id} />
      <Box sx={styles} {...getCheckboxProps()} {...rest}>
        <Stack direction="row">
          <Box flex="1">{children}</Box>
          <Checkbox
            pointerEvents="none"
            isFocusable={false}
            isChecked={state.isChecked}
            alignSelf="start"
          />
        </Stack>
      </Box>
    </Box>
  );
};
