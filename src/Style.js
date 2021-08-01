import styled from 'styled-components'



export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    flex-basis: 100%;
    flex-wrap: wrap;
    margin: 0%;
    padding: 0;
    
    @media screen and (max-width:600px){
        margin: auto;
    } 
`

export const Div = styled.div`
    flex-basis: 420px;
    position: relative; 
    line-height: 28px;
    color: #fff;
    h1{
        margin-bottom: 25px;
        line-height: 30px;
       
    }    

    @media screen and (max-width:600px){
        margin: auto;
        width: 60%;
        text-align:center;
        h1{
        margin: 20px;
        line-height:36px;
    }

    } 
`

export const Form = styled.form`
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.1);
    p{
        color:hsl(246, 25%, 77%) ;
    }  
    @media screen and (max-width:600px){
        margin: auto;
        width:calc(100vw - 50%);
    } 
`;

export const InputField = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    color: hsl(249, 10%, 26%);
    margin:8px 0px;
    border-radius: 3px;;
    border: 1px solid lightgrey;
    border-color: ${ (props) => props.primary ? 'red' : 'null' };
`;

export const DivError = styled.em`
    color: red;
    font-size: small;
    text-align: right;
    position: relative;
    span{
        width: 100%;
        display: block;
    }
`;

export const Button = styled.button`
    background: ${ (props) => props.primary ? 'hsl(154, 59%, 51%)' : 'hsl(248, 32%, 49%)'};
    color: #fff;
    width: ${(props) => props.primary ? '100%' : '100%' } ;
    box-sizing: border-box;
    padding: 1.19em;
    margin:10px auto;
    border-radius: 5px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.21);
    
`;

export const Btn = styled.button`
    background:  hsl(248, 32%, 49%);
    box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.21);
    padding: 15px;
    width: 100%;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 20px auto;

    @media screen and (max-width:600px){
       display: block;
       margin:20px  auto;
       width:calc(100vw - 40%);
        
    } 
`;

export const Terms = styled.p`
    font-size: small;
    text-align: center;
    strong {
        color: red;
    }
`;

export const IconFiled = styled.span`
    background-color: brown;
    position: absolute;
    left: -40px;
    top: -5px;
`;

