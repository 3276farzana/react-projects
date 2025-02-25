import React, { useEffect, useState } from 'react'
//npm install framer-motion for animation ; what we did installnp
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'


function Popular() {
  // const apiKey = import.meta.env.VITE_API_KEY; 
  const [popular,setPopular]=useState([]);


  useEffect(()=>{
    getPopular();
  },[])
  //use async to wait untill data are fetch
  const getPopular= async()=>{

    //if there is nothing on locat storage we will set it.
    // if there is something we will set our  state to it
    const check= localStorage.getItem('Popular');
    
    // if we do have something in local storage 
    if(check){
      // when you pulling back the item, then parse modify the string in array again.
      setPopular( JSON.parse(check))
    }else{
      const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`)
      const data=await  api.json()
      //in json you can only save data in string. so we did take the array and modify it in string
      localStorage.setItem('popular',JSON.stringify(data.recipes))
      // console.log(data) 
      setPopular(data.recipes);
      // console.log(data.recipes)
    }
    
  }
  return (
    <div>
      {
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag:'free',
            gap:'5rem',

          }}>
          {
            popular.map((recipe)=>{
              return(
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={"/recipe/"+recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <h4>{recipe.title}</h4>
                      <Gradient/>

                    </Link>
                  </Card>
                </SplideSlide>           

              ) 
            })
          } 
          </Splide>
          
        </Wrapper>
      }


    </div>
  )
}

const Wrapper= styled.div`
  margin: 4rem 0rem; `;

const Card = styled.div `
  min-height: 25rem;
  border-radius: 2rem;
  overflow:hidden;
  position: relative;
  img{
    border-radius: 2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
  }
  p{
    position:absolute;
    z-index=10;
    left: 50%;
    bottom:0%;
    transform: translate(-50%,0%);
    color:white;
    width:100%;
    text-align: center;
    font-weight:600;
    font-size:1rem;
    height: 40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;
const Gradient = styled.div`
  z-index:3;
  position: absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Popular
