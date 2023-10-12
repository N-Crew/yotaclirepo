import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import loginCss from './Login.css'
import LoginHeader from './LoginHeader';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const dashboard = () => {
        //Need to write login api call here
        //  const authToken = 'sdfgdsgfdbjfd.dsfgfggdsfdsafaefreubjb.ergrtgd';
        //  localStorage.setItem('token', authToken);
        navigate('/dashboard');
    }
    const routeToRegister = ()=>{
        navigate('/register');
    }
    return (
        <>
        <LoginHeader/>
        <ToastContainer/>
            <div className='login-bg-body'>
                <div class="container">
                    <div class="row">
                        <div class="col"> </div>
                        <div class="card login-card-body">
                            <div class="card-header">
                                <h3 className='text-center'>Trainer Login</h3>
                            </div>
                            <div class="card-body">
                                <div class="col mt-4">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email Address:</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Label>Password:</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                    </Form>
                                    <div className='text-center'>
                                        <button type='submit' className='btn btn-success login-btn' onClick={dashboard}>Login</button>
                                        <span className='d-flex justify-content-center'>
                                            <Link to='#'>Forgot Password</Link>&nbsp;&nbsp;|
                                            New User?&nbsp;<Link to='/register'>Register</Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col"> </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default Login;