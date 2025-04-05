// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";

import {
  Button,
  Center,
  MantineProvider,
  SegmentedControl,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { ModalsProvider, modals } from "@mantine/modals";

import { CommandMenu } from "@/components/command-menu";
import { Notifications } from "@mantine/notifications";
import { spotlight } from "@mantine/spotlight";
import { useHotkeys } from "@mantine/hooks";

function Content() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useHotkeys([["mod+J", toggleColorScheme]]);

  return (
    <Center h="100vh">
      <Stack w={400}>
        <SegmentedControl data={["Settings", "Notifications"]} />
        <Button variant="default" onClick={toggleColorScheme}>
          Your current scheme is {colorScheme}
        </Button>
        <Button variant="default" onClick={spotlight.open}>
          Spotlight
        </Button>
        <Button
          variant="light"
          onClick={() =>
            modals.open({
              title: "Hello",
              children: <Text>Ninja turtles are the best!</Text>,
            })
          }
        >
          Modal
        </Button>
      </Stack>
    </Center>
  );
}

export default function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <Notifications />
      <ModalsProvider>
        <Content />
      </ModalsProvider>
      <CommandMenu />
    </MantineProvider>
  );
}
