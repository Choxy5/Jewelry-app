import React from 'react';
import './FormPage.css';

import Navbar from '../Navbar/Navbar';
import FooterSection from '../FooterSection/FooterSection';


function FormPage() {

  return (
    <>
      <Navbar />
      <div className="form">
        <div className="register">
          <h1>Registration</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </form>
          <button>Register</button>
        </div>

        <div className="login">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>
          <button>Login</button>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default FormPage;
