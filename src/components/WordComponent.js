import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


const WordComponent = ({ word, val, get, getv}) => {
  
  

  const [cword, setWord] = useState(word)
  val = getv()>14? 5:val;
  useEffect(() => console.log(val), [])

  const Word = styled.li`
    transition: all 0.1s;
    position: absolute;
    list-style-type: none;
    /* color: #888; */
    font: roboto;
    font-size: 2.4rem;
    margin: 20px;
    animation: test 2s reverse ;
    animation-delay: ${val}s;
    left: -15vw;
    @keyframes test {
      0%{
        left: -15vw;
      }
      1%{
        left: 15vw
      }
      25%{
        left: 35vw;
      }
      50%{
        left: 50vw;
        color: #ccc;
      }
      75%{
        left: 65vw;
      }
      100%{
        left: 80vw
      }
    }
  
`

  return (

    <Word className="deley" onAnimationEnd={() => {
      setWord(get())
    }} >{cword}
    </Word>
    
  )
}

export default WordComponent
