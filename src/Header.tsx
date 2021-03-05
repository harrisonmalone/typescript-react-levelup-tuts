import React from 'react'

interface Props {
  title: string
  isActive?: boolean
}

export function Header({ title, isActive = true }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <p>in active</p>}
    </div>
  )
}
