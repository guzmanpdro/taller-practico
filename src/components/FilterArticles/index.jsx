import { useState } from 'react'
import { useFilter } from '../hooks/useFilter'
import { FlexContainer } from '../../styles'
import {
  SectionFilter,
  FilterLanguages,
  FilterButton,
} from './styles'
import FilterListItem from '../FilterListItem'

function FilterArticles() {
  const [dropDown, setDropdown] = useState(true)
  const { clearFilter } = useFilter()

  return (
    <SectionFilter>
      <FlexContainer>
        <div>
          <FilterButton onClick={() => setDropdown(!dropDown)}>Filtrar por lenguaje</FilterButton>
          <FilterLanguages dropDown={!dropDown}>
            <FilterListItem language='html' textLabel='HTML' />
            <FilterListItem language='css' textLabel='CSS' />
            <FilterListItem language='react' textLabel='React' />
            <FilterListItem language='python' textLabel='Python' />
          </FilterLanguages>
        </div>
        <div>
          <FilterButton onClick={clearFilter}>Limpiar filtro</FilterButton>
        </div>
      </FlexContainer>
    </SectionFilter>
  )
}

export default FilterArticles