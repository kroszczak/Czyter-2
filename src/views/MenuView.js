import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import FileComponent from '../components/FileComponent'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 250px;
    gap: 10px;
    background-color: #444;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;`


const MenuView = () => {
    const [items, setItems] = useState({});

    useEffect(() => {  
        fetch('/list', { method: 'GET' })
            .then(res => res.json())
            .then(res => setItems(res))
    }, [])

    return (
        <Container>
            {Object.keys(items).map((key, index) => <FileComponent key={key}>  </FileComponent>)}
        </Container>
    )
}

export default MenuView;