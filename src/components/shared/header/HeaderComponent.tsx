import { FC } from 'react'
import { styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface NavItemProps {
  to: string
  text: string
}

const StyledLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const NavItem = ({ to, text }: NavItemProps) => (
  <StyledLink to={to}>
    <Typography variant="paragraph">{text}</Typography>
  </StyledLink>
)

export const HeaderComponent: FC = () => (
  <nav>
    <NavItem to="/" text="Home" />
    <NavItem to="/about" text="About" />
    <NavItem to="/contact" text="Contact" />
  </nav>
)
