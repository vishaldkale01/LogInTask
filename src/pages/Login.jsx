import React ,{useState} from 'react'
import logo from "../Assets/img/logo.png"
// import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
import "../Assets/CSS/login.css"
import PasswordStrengthMeter from '../components/PasswordStrengthMeter'
export default function Login() {
  
  const [success, setsuccess] = useState(true)
  const [fail, setfail] = useState(true)
  let result = false
        const formik = useFormik({
            initialValues :{
                email: "vishaldkale0@gmail.com",
                password : "Vishal123@"
            },
            validationSchema: yup.object({
                email:yup.string().email("this is not valid").required("can not be empty"),
                // password:yup.string().required("password can not be empty")
          password: yup.string()
          .required('Please Enter your password')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),
              }),
              onSubmit :  (value ,action) => {
                // e.preventdefault()
                
                 ("vishaldkale0@gmail.com" === value.email && "Vishal123@" === value.password ) 
                ?action.resetForm()` ${console.log("login",result)} ${setsuccess(false)} ${setfail(true)}`
                : setfail(false) `${setsuccess(true)}`
                console.log("formik.value",value);
                console.log("formik.value",formik.values);
              }
            })
  return (
            <div className="d-flex justify-content-between">
            <div className='Left-main-div'>
                <div className='left-subDiv'>
                <img src={logo} className='img-fluid mt-5' alt="" width="200" height="200"  />
                   <p className="mt-2 p-0 text_bold" >India's first waterless <br /> car cleaning company</p> 
                </div>
            </div>
            <div className='Right-main-Div'>
            <div className='Right-SubDIv'>
            <h6 className="card-title mt-3 text_bold text_alignR mr-20">Need Help?</h6>
            <br />
                 
                            <div  className="card mt-5 form-div" >
                                      <div class="">
                                        <div class="" >
                                          <div class="text-center text_bold " >Login</div>
                                          <div class="card-body">
                                            <form onSubmit={formik.handleSubmit} >
                                            <div>
                                              <label for="email" class="form-label text_bold">Email</label>
                                              <input 
                                                type="text"
                                                className={
                                                    formik.errors.email 
                                                      ? "form-control is-invalid"
                                                      : "form-control"
                                                  }
                                                id="email"
                                                placeholder="Enter Your Email"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                              />
                                              <div className="valid-feedback"></div>
                                              <div className="invalid-feedback">{formik.errors.email}</div>
                                            </div>
                                            <div class="mt-2">
                                              <label for="password" class="form-label text_bold">Password</label>
                                              <input
                                                type="password"
                                                // class="form-control p-3"
                                                id="password"
                                                placeholder="Enter Your Password"
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                                className={
                                                  formik.errors.password
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                                }
                                              />
                                                <PasswordStrengthMeter password={formik.values.password} />
                                              <div class="valid-feedback">Looks good!</div>
                                              <div class="invalid-feedback">{formik.errors.password}.</div>
                                            </div>
                                            {
                                              success == true
                                              ? <p className=" mb-5 mt-2 text_alignR"> forget Password ? </p>
                                              :  <div><p className="  mt-2 text_alignR"> forget Password ? </p>
                                              <p className="alert alert-success"> Your Are Log In  </p></div>
                                            }
                                             {
                                                fail === true 
                                                ? ""
                                                : <p className='alert alert-danger text-center'>Something Wen Wrong</p>
                                            }
                                            <button type="submit" class="btn w-100 mt-2 p-color">
                                              Login
                                            </button>
                                            </form>
                                            
                                          </div>
                                        </div>
                                      </div>
                  </div>
				         
                </div>
              </div>
            </div>
  )
}