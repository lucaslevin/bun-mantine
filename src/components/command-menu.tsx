import {
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
} from "@tabler/icons-react";
import { Spotlight, SpotlightActionData, spotlight } from "@mantine/spotlight";

import { Button } from "@mantine/core";

const actions: SpotlightActionData[] = [
  {
    id: "home",
    label: "Home",
    description: "Get to home page",
    onClick: () => console.log("Home"),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Get full information about current system status",
    onClick: () => console.log("Dashboard"),
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: "documentation",
    label: "Documentation",
    description: "Visit documentation to lean more about all features",
    onClick: () => console.log("Documentation"),
    leftSection: <IconFileText size={24} stroke={1.5} />,
  },
];

export function CommandMenu() {
  return (
    <Spotlight
      shortcut={["mod + K", "mod + P", "/"]}
      actions={actions}
      nothingFound="Nothing found..."
      highlightQuery
      searchProps={{
        leftSection: <IconSearch size={20} stroke={1.5} />,
        placeholder: "Search...",
      }}
    />
  );
}
