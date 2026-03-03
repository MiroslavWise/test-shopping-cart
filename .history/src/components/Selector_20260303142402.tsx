// import styled from "@emotion/styled"
import { useState } from "react"

import { cx } from "@/helpers/cx"

interface IProps {
  limit: number
}

function Selector({ limit }: IProps) {
  const [open, setOpen] = useState(false)

  function handle() {
    setOpen((_) => !_)
  }

  return (
    <div className="h-8 pr-1 flex flex-row flex-nowrap items-center justify-between pl-2.5 rounded-md border border-[#0000001a]">
      <span className="text-sm font-normal text-black/80">100</span>
      <div className="w-full flex flex-col absolute top-9 left-0 right-0"></div>
      <button type="button" className="relative w-6 h-auto aspect-square" onClick={handle}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={cx(
            "absolute w-6 h-auto aspect-square top-1/2 left-1/2 -translate-1/2 transition-all",
            open ? "rotate-180" : "rotate-0",
          )}
        >
          <path
            d="M17.3538 10.3537L12.3538 15.3537C12.3073 15.4002 12.2522 15.4371 12.1915 15.4623C12.1308 15.4874 12.0657 15.5004 12 15.5004C11.9343 15.5004 11.8693 15.4874 11.8086 15.4623C11.7479 15.4371 11.6927 15.4002 11.6463 15.3537L6.64628 10.3537C6.55246 10.2599 6.49976 10.1327 6.49976 9.99997C6.49976 9.86729 6.55246 9.74004 6.64628 9.64622C6.7401 9.5524 6.86735 9.49969 7.00003 9.49969C7.13272 9.49969 7.25996 9.5524 7.35378 9.64622L12 14.2931L16.6463 9.64622C16.6927 9.59977 16.7479 9.56292 16.8086 9.53778C16.8693 9.51263 16.9343 9.49969 17 9.49969C17.0657 9.49969 17.1308 9.51263 17.1915 9.53778C17.2522 9.56292 17.3073 9.59977 17.3538 9.64622C17.4002 9.69268 17.4371 9.74783 17.4622 9.80852C17.4874 9.86922 17.5003 9.93428 17.5003 9.99997C17.5003 10.0657 17.4874 10.1307 17.4622 10.1914C17.4371 10.2521 17.4002 10.3073 17.3538 10.3537Z"
            fill="black"
            fill-opacity="0.5"
          />
        </svg>
      </button>
    </div>
  )
}

export default Selector
