import FormData from "../components/FormData"
import { useState } from "react"

const UserLogin = () => {
    const [ value, setValue ] = useState({
      email:'',
      password:'',
      isMember:true
  })
  
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  
  const handleChange =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    // console.log(`${name}=${value}`);
      setValue({ name , value })
  }

  return (
 
       <section className='form-center'>
          <form className='form' onSubmit={handleSubmit}>

                   <FormData 
                    placeholder="Email-id"
                    type='text'
                    name='email'
                    value={value.email}
                    handleChange={handleChange}
                    errormessage='Required'
                    pattern= "[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                    />

                    {/* Password Field */}
                    <FormData 
                    placeholder="Password"
                    type='password'
                    name='password'
                    value={value.password}
                    handleChange={handleChange}
                    errormessage='Required'
                    pattern= '^[a-z]{0,10}$'
                    />

                  <div className='main-btn'>
                      <button type='submit' 
                        className='btn' 
                        onClick={handleSubmit}
                        >
                        Login
                      </button>
                  </div>
          </form>
        </section>
 
  )
}


export default UserLogin