import React, { useState, useEffect, FormEvent } from "react"
import ShowData from "./ShowData"

export default function DebounceComponent() {
  const [data, setData] = useState<[]>([])
  const [input, setInput] = useState<string>()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/products?limit=0")

        if (!response.ok) {
          throw new Error("error fetching data")
        }

        const responseJSON = await response.json()
        setData(responseJSON.products)

        return
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [input])

  return (
    <div className="space-y-2">
      <div>
        <label>Search for Debouncing</label>
        <input
          type="text"
          className="w-full rounded-md border-2 border-black p-2 outline-none"
          placeholder="enter text (debounce)"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target?.value)
          }
          value={input}
        />
      </div>

      <div className="flex-1 border-2 border-red-800">
        <ShowData data={data} />
      </div>
    </div>
  )
}
