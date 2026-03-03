import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import ErrorComponent from "./components/ErrorComponent"

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
  if (error) return <ErrorComponent error={error} />

  return <>пРИВЕТ</>
}

export default App
