import { useEffect, useState } from 'react'

function useLocalStorage (newItem, initialValue) {
  const [statusData, setStatusData] = useState({ loading: true, error: false })
  const [items, setItems] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(newItem)
        let parsedItems
        if (!localStorageItems) {
          parsedItems = [...initialValue]
          localStorage.setItem(newItem, JSON.stringify(parsedItems))
        } else parsedItems = JSON.parse(localStorageItems)

        setItems(parsedItems)
        setStatusData({ loading: false, error: false })
      } catch (error) {
        setStatusData({ loading: false, error: true })
        console.error(error)
      }
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveItems = newItems => {
    try {
      localStorage.setItem(newItem, JSON.stringify(newItems))
      setItems(newItems)
    } catch (error) {
      setStatusData({ loading: false, error: true })
    }
  }

  return {
    items,
    saveItems,
    statusData
  }
}

export { useLocalStorage }
