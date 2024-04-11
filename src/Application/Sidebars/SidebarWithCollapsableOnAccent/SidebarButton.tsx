import { Button, ButtonProps } from '@chakra-ui/react'

export const SidebarButton = (props: ButtonProps) => (
  <Button variant="tertiary.accent" justifyContent="start" iconSpacing="3" {...props} />
)
