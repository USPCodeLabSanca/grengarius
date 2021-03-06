import React from 'react'

export default function useFullHeightOnNextDiv() {
  React.useEffect(() => {
    const div = document.getElementById('__next')
    div.classList.add('w-full')
    div.style.height = 'max-content'
  }, [])
}
