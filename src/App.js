import React, { useState } from 'react'
import Icon from './icon-error.svg'
import ErrorIcon from './ErrorIcon';
import { Button, Container, Div, span, Form, InputField, Terms, DivError, Btn } from './Style';


const App = validate => {
  const [values, setValues] = useState({
    firstname: "",
    lastName: "",
    email:"",
    password:"",
    placeholder:"email@example/com"
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  

  function handleChange(e){
    const {name, value} = e.target;
    setValues({...values, 
      [name]: value
    })
  };

 
   
  const handleSubmit = event => {
    event.preventDefault();
    if(values.firstname && values.lastname && values.email){
      setValid(true);
     
    }
    setSubmitted(true);
  } 

  
  return (
    <Container>
     
      <Div>
      <h1>Learn to Code by watching others </h1>
      {/* {submitted && valid ? <h2>Thank you for Submitting your Data</h2>: null}  */}
      <p>
        See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how
        developers think is invaluable.
      </p>
      </Div>
     
      <Div>
      <Btn  type='submit'> <strong>Try it for free 7 days</strong>then $20/mo. thereafter </Btn>
      
      <Form onSubmit={handleSubmit}>  
       <div>
        <label>
          <InputField 
            type='text'
            name='firstname' 
            placeholder='First Name'
            className='InputField-field'
            value = {values.firstname}
            onChange={handleChange}
            />  
            <DivError>
            {submitted && !values.firstname ? <span>First Name cannot be empty <ErrorIcon /></span> : null }
            </DivError> 


        </label>
       </div> 
      

      <div>
      <label>           
          <InputField 
          
          type='text'
          name='lastname'
          className='InputField-field' 
          placeholder='Last Name'
          value = {values.lastname}
          onChange={handleChange}
          
          />
          <DivError>
        {submitted && !values.lastname ?  <span>Last Name cannot be empty <ErrorIcon /></span>  : null } 
          </DivError>
        </label>
      </div>
   
      <div>
      <label>
          <InputField 
          type='text'
          name='email'
          className='InputField-field' 
          placeholder= {submitted && !values.email ? values.placeholder : 'Email Address'  }
          value = {values.email}
          onChange={handleChange} />
       
        <DivError>

        {submitted && !values.email ? 
        <span>Looks like this is no an email <ErrorIcon /></span> 
         : null }
        {/* {submitted && !values.email.includes('@') ? <span>Invalid Email</span>: null} */}


        </DivError>
    </label>
      </div>
      
      <div>
      <label>
          <InputField 
          type='password'
          name='password'
          className='InputField-field' 
          placeholder='Passsword'
          value = {values.password}
          onChange={handleChange} />
        <DivError>
        {submitted && !values.password ?  <span>Password cannot be empty <ErrorIcon /></span> : null } 
        </DivError>
        </label>
      </div>

       <Button primary type='submit'>Claim your free trial </Button>
       <Terms>
         By clicking the button you are agreeing to our <strong>Terms and Servives</strong>
       </Terms>
      
      </Form>
    
      </Div>
       
    </Container>
  )
}
export default App