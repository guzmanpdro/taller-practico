import { createContext, useEffect, useState } from 'react'

const articlesContext = {
  tagDevTo: 'javascript',
  articlesDevTo: []
}

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  let [articles, setArticles] = useState(articlesContext)

  useEffect(function() {
    async function fetchDevTo() {
      const res = await fetch(`https://dev.to/api/articles?tag=${articles.tagDevTo}`)
      const articlesJson = await res.json()
      setArticles({ ...articles, articlesDevTo: articlesJson })
    }

    fetchDevTo()
  }, [articles.tagDevTo])

  return (
    <UserContext.Provider value={[articles, setArticles]}>
      {children}
    </UserContext.Provider>
  )
}