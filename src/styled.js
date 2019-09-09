import styled from 'vue-styled-components'


export const Fineoz = styled.div``
export const FineozContainer = styled.div`
  widht: 100%;
  padding: 0 1rem;
  margin: auto;
`
export const FineozHeader = styled.header`
  color: #fff;
  background-color: #36304a;
  padding: 1rem 0;
  text-align: center;
`
export const FineozHeaderTitle = styled.h5`
  color: #fff;
  margin: 0;
  font-size: 18px;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
`
export const FineozBody = styled.div`
  margin-top: 2rem;
`
export const FineozTableResponsive = styled.div``
export const FineozTable = styled.table`
width: 100%;
background-color: #fff;
text-align:center;
`
export const FineozTableHead = styled.thead`
  text-transform: uppercase;
  td{
    color: #fff;
    background-color: #36304a;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .5px;
    &:hover, &.td-hover{
      background-color: #484848 !important;
    }
  }
`
export const FineozTableBody = styled.tbody``
export const FineozTableTr = styled.tr`
  &.tr-active{
    td{
      background-color: #f2f2f2;
    }
  }
`
export const FineozTableTd = styled.td`
  color: #808080;
  padding: 1.25rem 1.875rem;
  font-size: 14px;
  line-height: 1.4;
  &.td-hover{
    background-color: #f2f2f2 !important;
  }
  &:hover{
    color: #fff;
    background-color: #36304a !important;
  }
`