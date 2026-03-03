import Loading from "@/assets/loading"

function LoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-10 md:my-20 lg:my-40 mx-auto">
      <div className="w-8 h-auto aspect-square relative flex items-center justify-center">
        <Loading />
      </div>
      <p className="text-center text-sm font-normal text-red-500">Загрузка данных</p>
    </div>
  )
}

export default LoadingComponent
