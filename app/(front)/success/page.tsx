import React, { use } from 'react'

export default function page({ 
   params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>}) {
     const {userId,session_id} =use(searchParams)
  return (
   
    <div>
      <h2>thanks for subscriptions {userId} -{session_id}</h2>
    </div>
  )
}
