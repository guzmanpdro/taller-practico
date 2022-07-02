import styled from 'styled-components'
import { PrimaryButton } from '../../styles'

export const SectionFilter = styled.section`
  padding: 1rem 0;
`

export const FilterButton = styled(PrimaryButton)`
  border: 1px solid royalblue;
  border-radius: 0;
  color: royalblue;
  background: transparent;
  cursor: pointer;

  &:hover {
    background: #e3e3e3;
  }
`

export const FilterLanguages = styled.ul`
  display: ${props => props.dropDown ? 'block' : 'none'};
  position: relative;
  border-right: 1px solid royalblue;
  border-left: 1px solid royalblue;
  background: #e3e3e3;
`