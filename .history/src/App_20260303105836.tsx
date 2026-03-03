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

  if (isLoading) return <div className="w-full h-screen flex items-center justify-center">
    
  </div>
  if (error) return "Ошибка"

  return <>пРИВЕТ</>
}

export default App
