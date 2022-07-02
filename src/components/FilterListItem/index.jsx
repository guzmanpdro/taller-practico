import { useFilter } from "../hooks/useFilter"
import {
  ContainerCheckbox,
  FilterItem,
  Input,
  Label,
} from "./styles"

function FilterListItem({ language, textLabel }) {
  const { handleFilter } = useFilter()

  return (
    <FilterItem>
      <ContainerCheckbox>
        <Input
          type="radio"
          name='language'
          id={language}
          value={language}
          onChange={handleFilter}
        />
        <Label htmlFor={language}>{textLabel}</Label>
      </ContainerCheckbox>
    </FilterItem>
  )
}

export default FilterListItem