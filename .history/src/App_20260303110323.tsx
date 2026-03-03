import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import Warning from "./assets/warning"

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
  if (!error)
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-auto aspect-square relative text-white bg-red-500 flex items-center justify-center rounded-full">
            <Warning />
          </div>
          <pre className="text-center text-sm font-normal text-red-500">Возникла ошибка, смотрите в консоли</pre>
        </div>
      </main>
    )

  return <>пРИВЕТ</>
}

export default App
