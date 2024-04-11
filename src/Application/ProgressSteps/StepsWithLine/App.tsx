import { Box, Container, HStack } from "@chakra-ui/react";
import { useStep } from "./useStep";
import { Step } from "./Step";

export const StepsWithLine = () => {
  const numberOfSteps = 3;
  const [currentStep, { setStep }] = useStep({
    maxStep: numberOfSteps,
    initialStep: 0,
  });
  return (
    <Box bg="bg.surface">
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="40"
      >
        <HStack spacing="3" width="40">
          {[...Array(numberOfSteps)].map((_, id) => (
            <Step
              key={id}
              cursor="pointer"
              onClick={() => setStep(id)}
              isActive={currentStep === id}
            />
          ))}
        </HStack>
      </Container>
    </Box>
  );
};
