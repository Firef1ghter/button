import React from "react";
import {MainDiv,CommonButton} from './Button.styled'


const Button = () => {
  return (
   <MainDiv>
     <CommonButton bgColor={'skyblue'} color={'white'} border={'none'}>Primary Button</CommonButton>
     <CommonButton bgColor={'white'} color={'black'} border={'1px solid black'}>Default Button</CommonButton>
     <CommonButton bgColor={'white'} color={'black'} border={'1px dashed'}>Dashed Button</CommonButton>

     <br></br>
     
     <CommonButton bgColor={'white'} color={'black'} border={'none'}>Text Button</CommonButton>
     <CommonButton bgColor={'white'} color={'blue'} border={'none'}>Link Button</CommonButton>
   </MainDiv>
  );
}

export default Button;
