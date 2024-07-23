import React, { useState, useEffect, useCallback } from "react"
import ShowData from "./ShowData"
import { debounce } from "../utils/debounce"
import { fetchApi } from "../utils/fetchApi"

export default function DebounceComponent() {
  const [data, setData] = useState<[]>([])
  const [input, setInput] = useState<string>("")

  const fetchDataFromApi = useCallback(
    debounce(async (qry: string) => {
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

      <div>
        <ShowData data={data} />
      </div>
    </div>
  )
}
