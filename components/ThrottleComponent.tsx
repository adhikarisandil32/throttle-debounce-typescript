import React, { useCallback, useEffect, useState } from "react"
import ShowData from "./ShowData"
import { throttle } from "../utils/throttle"
import { fetchApi } from "../utils/fetchApi"

export default function ThrottleComponent() {
  const [data, setData] = useState<[]>([])
  const [input, setInput] = useState<string>("")

  const fetchDataFromApi = useCallback(
    throttle(async (qry: string) => {
      try {
        const response = await fetchApi(`/products/search?q=${qry}&limit=0`)

        if (!response.ok) {
          throw new Error("error fetching data")
        }

        const responseJSON = await response.json()
        setData(responseJSON.products)

        return
      } catch (error) {
        console.log(error)
      }
    }, 500),
    [],
  )

  useEffect(() => {
    fetchDataFromApi(input)
  }, [input])

  return (
    <div className="space-y-2">
      <div>
        <label>Search for Throttling</label>
        <input
          type="text"
          className="w-full rounded-md border-2 border-black p-2 outline-none"
          placeholder="enter text (throttle)"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target?.value)
          }
          value={input}
        />
      </div>

      <div>
        <ShowData data={data} />
      </div>
    </div>
  )
}
