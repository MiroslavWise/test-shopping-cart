import Warning from "@/assets/warning"
import { useEffect } from "react"

function ErrorComponent({ error }: { error?: Error | null }) {
  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])

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
}

export default ErrorComponent
