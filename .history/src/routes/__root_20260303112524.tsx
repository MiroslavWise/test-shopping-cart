import { Outlet, createRootRoute } from "@tanstack/react-router"

import ProviderTanstack from "@/providers/tanstack"

export const Route = createRootRoute({
  component: () => (
    <ProviderTanstack>
      <main className="w-full flex flex-col items-center">
        <Outlet />
      </main>
    </ProviderTanstack>
  ),
})
