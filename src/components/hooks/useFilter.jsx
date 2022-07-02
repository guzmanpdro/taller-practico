import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export function useFilter() {
  const [articles, setArticles] = useContext(UserContext)
  
  function handleFilter(e) {
    const isChecked = (e.target.checked && e.target.value)
    setArticles({...articles, tagDevTo: isChecked || 'javascript'})
  }

  function clearFilter() {
    // This can be improved
    const isChecked = document.querySelector('input[type="radio"]:checked')

    if (isChecked) {
      isChecked.checked = false
      setArticles({...articles, tagDevTo: 'javascript'})
    }
    
    return
  }

  return {
    clearFilter,
    handleFilter
  }
}