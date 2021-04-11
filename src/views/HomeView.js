import React from 'react'
import styled from 'styled-components'
import DisplayComponent from '../components/DisplayComponent'


const Display = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #333;
    overflow: hidden;
`

const Title = styled.h1`
    color: #FACF25;
    font-family: Roboto, sans-serif;
    font-weight: 100;
    font-size: 7rem;
    letter-spacing: 20px;
    text-align: center;
    
`


const HomeView = () => {

    return (
        <Display>
            <Title>Read</Title>
            <DisplayComponent></DisplayComponent>
        </Display>
    )
}

export default HomeView
