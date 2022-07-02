import styled from 'styled-components'
import checkmark from '../../assets/iconCheckmark.svg'

export const FilterItem = styled.li`
  border-bottom: 1px solid royalblue;
`

export const ContainerCheckbox = styled.div`
  position: relative;
  padding: .5rem .8rem;
  cursor: pointer;
`

export const Input = styled.input`
  display: none;

  &:checked + label:before {
    background-image: url(${checkmark});
    background-color: royalblue;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 1rem;
  }
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: calc(100% - 2.5rem);
  padding-left: 2rem;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border: 3px solid royalblue;
  }
`