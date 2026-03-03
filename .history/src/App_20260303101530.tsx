import { useQuery } from "@tanstack/react-query"
import instance from "./api"

function App() {
  const {} = useQuery({
    queryFn: () =>
      instance({
        method: "GET",
        url: "/carts",
      }),
    queryKey: ["carts"],
  })

  return <>пРИВЕТ</>
}

export default App
