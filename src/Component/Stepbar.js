import { Box, Container, Stack } from "@chakra-ui/react";
import { Step } from "./Step";

export const StepsWithAccent = (props) => {
  const { currentStep } = props;

  return (
    <Box>
      {/* <Container pt={{ base: "4", md: "8" }}> */}
      <Stack direction={{ base: "column", md: "row" }} spacing="4">
        {steps.map((step, id) => (
          <Step
            key={id}
            cursor="pointer"
            // onClick={() => setStep(id)}
            title={step.title}
            description={step.description}
            isActive={currentStep - 1 === id}
            isCompleted={currentStep - 1 > id}
          />
        ))}
      </Stack>
      {/* </Container> */}
    </Box>
  );
};

const steps = [
  {
    title: "Step1",
    description: "회원가입🐶",
  },
  {
    title: "Step2",
    description: "캠페인신청🐱",
  },
  {
    title: "Step3",
    description: "캠페인체험🐶",
  },
  {
    title: "Step4",
    description: "콘텐츠작성🐱",
  },
];
