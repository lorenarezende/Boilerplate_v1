import {render, screen} from '@testing-library/react'
import Main from '.'
import React from 'react'

describe ('<Main />', () => {
    it ('should render the heading', () => {
        //renderiza o component
        const {container} = render (<Main />)
        //busca o element
        expect(screen.getByRole('heading', {name: /react avançado/i})).toBeInTheDocument()
        //gera snapshot
        expect (container.firstChild).toMatchSnapshot()
    
    })
})