import { Outlet, createRootRoute } from "@tanstack/react-router"

import ProviderTanstack from "@/providers/tanstack"

export const Route = createRootRoute({
  component: () => (
    <ProviderTanstack>
      <Outlet />
    </ProviderTanstack>
  ),
})


