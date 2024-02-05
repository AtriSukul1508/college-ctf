import Layout from '../components/Layout/Layout'
import '../styles/login.css';
import bg from '../assets/background.png';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import ErrorIcon from '@mui/icons-material/Error';
import { Lock, Person, Email, Call, Paid, School } from '@mui/icons-material';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useLogin } from '../hooks/useLogin';
import qr from '../assets/qr.jpeg'
import ParticlesBackground from '../components/Layout/ParticlesBackground';

export default function Login() {
  // Login Data 
  const [loginMail, setLoginMail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { login, loginError, is_Loading } = useLogin();
  // Sign Up Data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [college,setCollege] = useState('');
  const [transactionid, setTransactionID] = useState('');
  const [workshop, setDropdownData] = useState(undefined);
  const { signup, error, isLoading } = useSignup();

  // Password Visibility Toggle Function
  const [showPassword, setShowPassword] = useState(false);

  function showHidePW() {
    const pw = document.getElementById("user_password");
    const pwIcon = document.getElementById("pw_icon");
    if (pw.type === "password") {
      pw.type = "text";
      pwIcon.style.color = "#000";
    } else {
      pw.type = "password";
      pwIcon.style.color = "#ccc";
    }
  }

  // Login Data Post
  const verifyAndPostData = async (event) => {
    event.preventDefault();
    await login(loginMail, loginPassword);
  };
  // Sign Up Data Post
  const CreateAccount = async (event) => {
    event.preventDefault();
    console.log('wrok',workshop)
    await signup(name, email, phone, password,college,workshop, transactionid);
  }
  return (
    <Layout>
    <ParticlesBackground/>
      <div className='body'>
      
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          {/* For Sign Up Part */}
          <div className="signup">
            <label for="chk" aria-hidden="true" className='label'>Sign up</label>
            <form method='POST' className='user_acc_info'>
              <div className='acc__credentials'>
                <div className='user_name_field info_field'>
                  <Person className='info_icon' />
                  <input type='text' autoComplete='off' className='input' placeholder='Enter your name' name='name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className='user_email_field info_field'>
                  <Email className='info_icon' />
                  <input type='email' autoComplete='off' className='input' placeholder='Enter your mail ID' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='user_number_field info_field'>
                  <Call className='info_icon' />
                  <input type='number' autoComplete='off' className='input' placeholder='Enter your Phone number' name='phone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div className='user_password_field info_field'>
                  <Lock className='info_icon' />
                  <input type='password' autoComplete='off' className='input' placeholder='Enter your password' name='password' id='user_password' onChange={(e) => setPassword(e.target.value)} value={password} />
                  {showPassword ? (
                    <AiFillEye
                      size={20}
                      onClick={() => {
                        setShowPassword(!showPassword);
                        showHidePW();
                      }}
                      id="pw_icon"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size={20}
                      onClick={() => {
                        setShowPassword(!showPassword);
                        showHidePW();
                      }}
                      id="pw_icon"
                    />
                  )}
                </div>
                <div className='user_college_field info_field'>
                  <School className='info_icon' />
                  <input type='text' autoComplete='off' className='input' placeholder='Enter your College Name' name='college' onChange={(e) => setCollege(e.target.value)} value={college} />
                </div>
                <div className="workshop_field info_field">
                  <select required name='workshop' onChange={(e)=>setDropdownData(e.target.value)}>
                    <option disabled selected>Which one do you want to choose ?</option>
                    {['CTF','CTF+Workshop'].map((option, index) => {
                      return (
                        <option key={index}>
                          {option}
                        </option>
                      );
                    })}
                  </select>

                </div>
                {workshop==='CTF+Workshop' && 
                <>
                <div className='qr_field info_field' style={{marginTop:'20px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <label style={{color:'white',fontSize:'.8rem'}}>Please scan the qr code to pay (250 Rs):</label>
                    <img src={qr} width='250' height='250' className='qr_img'/>
                </div>
                <div className='transactionid_field info_field'>
                  <Paid className='info_icon' />
                  <input type='text' className='input' required={workshop==='CTF+Workshop'?true:false} autoComplete='off' placeholder='Transaction ID' name='transactionid' id='transaction_id' onChange={(e) => setTransactionID(e.target.value)} value={transactionid} />
                </div></>}

              </div>
              {error && <div className="error"><ErrorIcon fontSize='small' /> {error}</div>}
              <div className='btns_submit'>
                <input type='submit' name='signup__btn' className='button' onClick={CreateAccount} value='Sign Up' />
              </div>
            </form>
          </div>

          {/* For Login Part */}

          <div className="login">
            <label for="chk" aria-hidden="true" className='label'>Login</label>

            <form method='POST'>
              <input
                type="email"
                name="email"
                className='input'
                autoComplete="off"
                placeholder="Enter your mail ID"
                onChange={(e) => setLoginMail(e.target.value)}
                value={loginMail}
                required
                id="user_mail"
              />
              <input
                required
                className='input'
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
                id="user_password"
              />
              {loginError && (
                <div className="error">
                  <ErrorIcon fontSize="small" /> {loginError}
                </div>
              )}
              <input
                type="submit"
                name="login__btn"
                className="login__btn button"
                id="login__btn"
                onClick={verifyAndPostData}
                value="Sign In"
              // disabled={is_Loading}
              />
            </form>


          </div>



        </div>
      </div>
      {/* For background image */}
      {/* <div
        className="bg-wrap"
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "50% 0",
          backgroundSize: "cover",
          zIndex: "-10900",
        }}
      ></div> */}
    </Layout>
  )
}