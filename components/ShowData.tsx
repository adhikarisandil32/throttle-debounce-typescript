import React from "react"

type Data = {
  data?: { id: string; title: string }[]
}

export default function ShowData({ data }: Data) {
  return (
    <div className="space-y-2">
      {data?.map((datum) => (
        <div key={datum.id}>
          <span>{datum.title}</span>
        </div>
      ))}
    </div>
  )
}
