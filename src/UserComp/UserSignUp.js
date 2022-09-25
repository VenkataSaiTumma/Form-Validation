import styled from "styled-components" 
import FormData from "../components/FormData"
import { useState } from "react"

const UserSignUp = () => {
  const [ values,setValues ] = useState({
    id:'',
    name:'',
    password:'',
    dateOfBirth:'',
    email:'',
    mobileNumber:'',
    city:'',
    state:'',
    country:'',
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
  }


  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    // console.log(`${name}=${value}`);
    setValues({ name, value})
  }

  return (
    <Wrapper>
       {/* <Navbar /> */}
       <section className='form-center'>
       <form className='form' onSubmit={handleSubmit}>
              {/* Tite */}
                <h2 className='header'>
                  Welcome ...
                </h2>
                
           <div className='flex'>
                 {/* Name Field */}
                 <FormData 
               label='name'
               type='text'
               name='name'
               value={values.name}
               handleChange={handleChange}
               errormessage='Name should have 3 to 50 characters'
               pattern= '^[A-Za-z0-9]{3,16}$'
             />

                {/* Password Field */}
                <FormData 
               label='password'
               type='password'
               name='password'
               value={values.password}
               handleChange={handleChange}
               errormessage='Password should have 5 to 10 characters'
               pattern= "^[a-z]{5,10}$"
             />
          </div>

          <div className='flex'>
                 {/* MobileNumer Field */}
                 <FormData 
               label='mobileNumber'
               type='text'
               name='mobileNumber'
               value={values.mobileNumber}
               handleChange={handleChange}
               errormessage='Mobile Number should have 10 digits'
               pattern= "^[0-9]{10}$"
             />

                {/* Email Field */}
                <FormData 
               label='email'
               type='email'
               name='email'
               value={values.email}
               handleChange={handleChange}
               errormessage='Required'
               pattern= "[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
             />
          </div>

          <div className='flex'>
                 {/* dateOfBirth Field */}
                 <FormData 
               label='dateOfBirth'
               type='date'
               name='dateOfBirth'
               value={values.dateOfBirth}
               handleChange={handleChange}
               errormessage='Required'
              //  pattern= "^[4-9]?\d$"
             />

                 {/* city Field */}
                 <FormData 
               label='city'
               type='text'
               name='city'
               value={values.city}
               handleChange={handleChange}
               errormessage='City should have 6 to 20 characters'
               pattern= "^[A-Za-z]{6,20}$"
             />
          </div>

          <div className='flex'>
                 {/* state Field */}
                 <FormData 
               label='state'
               type='text'
               name='state'
               value={values.state}
               handleChange={handleChange}
               errormessage='State should have 6 to 20 characters'
               pattern= "^[A-Za-z]{6,20}$"
             />

                {/* country Field */}
                <FormData 
               label='country'
               type='text'
               name='country'
               value={values.country}
               handleChange={handleChange}
               errormessage='Country should have 6 to 20 characters'
               pattern= "^[A-Za-z]{4,20}$"
             />
          </div>
              
               <div className='main-btn'>
                <button type='submit' 
                  className='btn' 
                  >
                  Register
                </button>
               </div>

           </form>
       </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.flex{
  display: flex;
  margin-left: 1rem;
  margin-top: 1rem;
}
label{
    margin-bottom: 1.5px;
    text-transform:capitalize;
    padding-left: 1rem;
}
input{
  width: 85%;
    border: 2px solid #f0f0f0;
    border-radius: 10px;
}   
h2{
  text-align: center;
  font-size: xx-large;
  color: purple;
}
.form-center{
  display: grid;
  margin-left: -10rem;
  margin-top: -7rem;
  row-gap: 0.5rem;
}
.form{
      position: relative;
      width: 650px;
      height: 665px;
      margin: 0 auto;
      background-color: white;
      margin-top: -1.5rem;
      border-radius: 10px;
      box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
`

export default UserSignUp