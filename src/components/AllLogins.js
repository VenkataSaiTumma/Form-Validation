import styled from "styled-components" 
import { useState } from "react"
import UserSignUp from '../UserComp/UserSignUp'
import UserLogin from "../UserComp/UserLogin"

const AllLogins = () => {
  const [ value , setValue ] = useState({
    isMember:true
  })

const toggleMember = () =>{
  setValue({ ...value, isMember: !value.isMember})
                          // if isMember is true then value should be false
                          // if isMember is false then value should be true
}

  return (
     <Wrapper>
      <section className='container'>
        <div className='card1'>
            <h2 className='header'>
              { value.isMember ? 'Register' : 'Login' }
            </h2>

          <div className='main-btn'>
             <div className='form'>
                <div>
                   { value.isMember ? <UserSignUp /> : <UserLogin /> }
                </div>
                <p>
                  { value.isMember ? 'Already a Member?' : 'Not a Member Yet?' }
                  <button type='button' onClick={toggleMember} className='member-btn'>
                    { value.isMember ? 'Login' : 'Register' }
                  </button>
                </p>
             </div>
          </div>
        </div>         
      </section>
     </Wrapper>
  )
}

const Wrapper = styled.section`
  .member-btn {
    background: transparent;
    border: transparent;
    color: #FCC133;
    font-size: medium;
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
 label{
    display: inline-block;
    margin-bottom: 5px;
    margin-right:12rem;
    text-transform:capitalize;
    /* font-size: medium; */
}
 input{
    width: 85%;
    border: 2px solid #f0f0f0;
    border-radius: 5px;
    display: block;
    font-size: 14px;
    padding: 3px;
    margin-bottom:1rem;
}
h2{
  text-align: center;
  font-size: xx-large;
  color: purple;
}
.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 0 auto;
    padding: 26px 0;
}
.card1{
      position: relative;
      width: 300px;
      height: 420px;
      margin: 0 auto;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
}
`

export default AllLogins