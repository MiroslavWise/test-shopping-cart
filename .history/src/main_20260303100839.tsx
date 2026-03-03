import { createRoot } from "react-dom/client"

import App from "./App.tsx"
import ProviderTanstack from "@/providers/tanstack.tsx"

createRoot(document.getElementById("root")!).render(
  <ProviderTanstack>
    <App />
  </ProviderTanstack>,
)
