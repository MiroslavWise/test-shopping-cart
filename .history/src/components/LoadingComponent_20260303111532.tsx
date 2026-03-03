import Loading from "@/assets/loading"

function LoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-auto aspect-square relative flex items-center justify-center">
        <Loading />
      </div>
      <pre className="text-center text-sm font-normal text-red-500">Загрузка данных</pre>
    </div>
  )
}

export default LoadingComponent
