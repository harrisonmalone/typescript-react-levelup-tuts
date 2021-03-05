import React from 'react'

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={() => onClick}>{children}</button>
  )
}