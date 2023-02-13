import React, { type FC } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 0.1rem solid transparent;
  background-color: #fff;
  padding: 0.8rem;
  :hover {
    border: 0.1rem solid rgba(22, 119, 255);
    cursor: pointer;
    border-radius: 20%;
  }
`
const GhostButton: FC<React.PropsWithChildren > = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default GhostButton
