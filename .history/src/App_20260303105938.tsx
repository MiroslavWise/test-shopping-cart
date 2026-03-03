import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { getCarts } from "./services/carts"

function App() {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getCarts({ limit: 12 }),
    queryKey: ["carts"],
  })

  useEffect(() => {
    console.log("data: ", data)
    if (data) {
      if (data?.data) {
      }
    }
  }, [data])

  if (isLoading)
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="">Загрузка</div>
      </main>
    )
  if (error)
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">Загрузка</div>
      </main>
    )

  return <>пРИВЕТ</>
}

export default App
