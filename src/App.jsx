import Header from './components/Header'
import FilterArticles from './components/FilterArticles'
import ListOfArticles from './components/ListOfArticles'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <Header />
      <FilterArticles />
      <ListOfArticles />
    </UserProvider>
  )
}

export default App
