import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`
export const Logo = styled.div`
  font-size: 1.5rem;
  padding: 1rem 2rem;
`

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  justify-content: space-between;
  padding: 0.5rem 4rem;
`
export const NavItems = styled.div`
  a {
    text-decoration: none;
    color: #383838;
  }
`

export const Content = styled.div`
  height: 250px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  padding: 2rem 8rem;
  justify-content: space-between;

  span:first-child {
    max-width: 425px;
  }

  img {
    height: 240px;
  }
`
export const ContentMid = styled.div`
  height: 250px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 8rem 0;

  strong {
    max-width: 300px;
    flex-shrink: 0;
  }
`

export const Title = styled.strong`
  font-size: 1.5rem;
  letter-spacing: 0.2px;
`

export const Text = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  letter-spacing: 0.2px;
  height: 72px;
`
export const TextMid = styled.p`
  font-size: 1rem;
  letter-spacing: 0.2px;
`

export const Divider = styled.div`
  margin-top: 3rem;
  background-color: #383838;
  height: 2.5rem;
  width: 100%;
`
