import { Flex, Stack, Text } from "@chakra-ui/react";
import {
  FiBarChart2,
  FiCamera,
  FiFilm,
  FiHome,
  FiInstagram,
  FiLinkedin,
  FiMic,
  FiMusic,
  FiTwitter,
} from "react-icons/fi";
import { Logo } from "./Logo";
import { NavButton } from "./NavButton";

export const SidebarWithGroups = () => (
  <Flex as="section" minH="100vh" bg="bg.canvas">
    <Flex
      flex="1"
      bg="bg.surface"
      boxShadow="sm"
      maxW={{ base: "full", sm: "xs" }}
      py={{ base: "6", sm: "8" }}
      px={{ base: "4", sm: "6" }}
    >
      <Stack justify="space-between" spacing="1" width="full">
        <Stack spacing="8" shouldWrapChildren>
          <Logo />
          <Stack spacing="1">
            <NavButton label="Home" icon={FiHome} />
            <NavButton label="Writing" icon={FiBarChart2} aria-current="page" />
          </Stack>
          <Stack>
            <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
              Media
            </Text>
            <Stack spacing="1">
              <NavButton label="Movies" icon={FiFilm} />
              <NavButton label="Pictures" icon={FiCamera} />
              <NavButton label="Music" icon={FiMusic} />
              <NavButton label="Podcasts" icon={FiMic} />
            </Stack>
          </Stack>
          <Stack>
            <Text textStyle="sm" color="fg.subtle" fontWeight="medium">
              Social
            </Text>
            <Stack spacing="1">
              <NavButton label="Twitter" icon={FiTwitter} />
              <NavButton label="Instagram" icon={FiInstagram} />
              <NavButton label="Linkedin" icon={FiLinkedin} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  </Flex>
);
