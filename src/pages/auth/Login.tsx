
import './Login.css'
import {  Form, Formik } from 'formik'
import { Link, Route, redirect } from 'react-router-dom'
import { object, string } from 'yup'
import FormikInput from '../../components/FormikInput'
import AuthLoginService from '../../services/authServices/AuthService'
import { AuthLoginRequest } from '../../models/requests/auth/AuthLoginRequest'
import { useState } from 'react'

type Props = {}

const Login = (props: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialValues: AuthLoginRequest = {
    Email: "",
    Password: "",
  };
  let service: AuthLoginService = new AuthLoginService();


  const submit = async (initialValues:AuthLoginRequest) => {
    service.login(initialValues).then(() => {setIsLoggedIn(true); console.log(isLoggedIn);
    }).catch(() => setIsLoggedIn(false)).then(()=>{
      console.log(isLoggedIn);
      
      if (isLoggedIn) {
        window.location.href = "/dashboard";
      }
    });
  }

  const validationSchema = object({
    email: string().required("Email Alanı Zorunludur*"),
    password: string().required("Şifre Alanı Zorunludur*"),
  });

  return (
    <div className="login-base">
      <div className="login">
        <Formik
          initialValues={initialValues}
          onSubmit={(initialValues:AuthLoginRequest) => {

            submit(initialValues)
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="login-img"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              />
            </div>
            <div className="login-events">
              <div >
                <FormikInput
                  name="email"
                  type='email'
                  label='E Posta'
                />
              </div>
              <div>
                <FormikInput
                  name="password"
                  type="text"
                  label='Şifre'
                />
              </div>

             
                <button className="login-btn" type="submit" >
              
                  {"Giriş Yap"}
                  
                </button>
            </div>

            <div className="d-flex align-items-center justify-content-center mt-2">
              <small>
                Henüz üye değil misin?
              </small>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login