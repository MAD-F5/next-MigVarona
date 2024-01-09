import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    // getByRole es una función de Testing Library que se utiliza para buscar un elemento en la interfaz de usuario por su papel (role). En este caso, se está buscando un elemento que tenga el papel (role) de "heading" (encabezado). El segundo parámetro es un objeto que contiene la propiedad level con el valor 1, lo que significa que se está buscando un encabezado de nivel 1 (h1).
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})