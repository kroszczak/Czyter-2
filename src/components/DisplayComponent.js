import React, { useState} from 'react'
import styled from 'styled-components'
import WordComponent from './WordComponent'

const DisplayList = styled.ul`
    display: block;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    /* border: 1px white solid; */
    width: 50vw;
    height: 20vh;
    margin: auto;
    overflow: hidden;
`

const DisplayComponent = () => {
    
    // const [arr, setArray] = useState([]])
    let word = 0;
    let counter = 0
    const GetWord = () => {
        word++;
        // return arr[word - 1];
        return word
    }

    const getVal = () => {counter++;return counter; }
    
    const CreateDisplayArray = () => {
        let array = [];
        let i = 0;
        while (i < 7) {
            array.push(<WordComponent word={GetWord()} val={i} get={GetWord} getv={getVal}></WordComponent>);
            i++;
        }
        return array;
    }
    
    return (
            <DisplayList>
                {CreateDisplayArray()}
            </DisplayList>
    )
}

export default DisplayComponent
