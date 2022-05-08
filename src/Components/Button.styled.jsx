
import styled from 'styled-components'


export const MainDiv = styled.div`
height:200px;
width:570px;
border:1px solid lightgrey;
margin:auto;
padding:27px;
margin-top:200px;`




export const CommonButton = styled.button`
height:35px;
width:130px;
margin:20px;
background-color:${({bgColor})=> bgColor};
color: ${({color})=>color};
border: ${({border})=>border};
`
