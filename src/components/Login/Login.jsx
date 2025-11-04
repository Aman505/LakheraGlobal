import { useFormik, } from 'formik';
import './Login.css';
import { Validation } from '../../Schema/Validation';
import { NavLink } from 'react-router-dom';

const initialValues = {
    email: "",
    password: ""
}

export const Login = () => {
    const { values, errors, handleChange, handleSubmit, isValid, dirty } = useFormik({
        initialValues: initialValues,
        validationSchema: Validation,
        onSubmit: (values) => {
            console.log("Loggedin", values)
        }
    });

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-left">
                    <div className="logo-container">
                        <NavLink to="/dashboard">
                            <img src="/assets/login/Logo.svg" className='login-logo' alt="Logo" />
                        </NavLink>
                    </div>
                    <img className='login-illustration' src="/assets/login/loginBox.png" alt="Login Illustration" />
                </div>
                <div className='login-right'>
                    <h1 className="login-heading">
                        <span className="login-heading-blue">Login</span> <span className="login-heading-black">to account</span>
                    </h1>
                    <p className='login-description'>
                        Access your tasks, notes, and projects anytime, anywhere - and keep everything flowing in one place.
                    </p>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-wrapper">
                            <div className="input-container">
                                <img src="/assets/login/emalId.svg" className="input-icon" alt="Email" />
                                <input 
                                    className={`floating-input ${values.email ? 'has-value' : ''} ${errors.email ? 'error' : ''}`}
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    autoComplete="off"
                                    value={values.email} 
                                    onChange={handleChange}
                                />
                                <label htmlFor="email" className="floating-label">Email Id</label>
                            </div>
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        
                        <div className="input-wrapper">
                            <div className="input-container">
                                <img src="/assets/login/password.svg" className="input-icon" alt="Password" />
                                <input 
                                    className={`floating-input ${values.password ? 'has-value' : ''} ${errors.password ? 'error' : ''}`}
                                    type="password" 
                                    name='password' 
                                    id='password'
                                    autoComplete='off'
                                    value={values.password} 
                                    onChange={handleChange}
                                />
                                <label htmlFor="password" className="floating-label">Password</label>
                            </div>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        
                        <div className="forgot-password-container">
                            <a href="#" className='forgot-password-link'>Forgot your password?</a>
                        </div>

                        <NavLink to="/dashboard" className="signin-link">
                            <button 
                                className='signin-button' 
                                disabled={!(isValid && dirty)} 
                                type='submit'
                            >
                                Sign In
                            </button>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

