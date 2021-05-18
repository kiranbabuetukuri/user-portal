import React, { useState } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import { store } from './store/Store'

import { fetchUserLoggedIn } from './store/UserLogin'
import { connect } from 'react-redux'
function Login(props) {
	const initialState = { email: '', password: '' }
	const [formdata, setformdata] = useState(initialState)
	const handleChange = (event) => {
		//	console.log(event)
		setformdata({ ...formdata, [event.target.name]: event.target.value })
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		///let result = SaveSignUp(formdata)
		// console.log('handleSubmit')
		// console.log(props.getLogin)
		props.setLogIn(formdata)
	}

	store.subscribe((event) => {
		// console.log('subscribe')
		///console.log(event)
		console.log(props.getLogin)
	})
	const checkLogin = () => {
		// console.log(checkLogin)
		//console.log(props.getLogin)
	}

	const checkForLogin = () => {
		if (props.getLogin) {
			props.history.push('/home')
		}
	}
	checkForLogin()
	return (
		<div>

			<div className="container h-100">

				<div className="d-flex justify-content-center h-100">
					<div className="user_card">
						<div className="d-flex justify-content-center">
							<div className="brand_logo_container">
								<img src="./images/logo.png" className="brand_logo" alt="Logo" />
							</div>
						</div>
						<div className="d-flex justify-content-center form_container">
							<form>


								<h5 style={{ backgroundColor: 'red', display: props.getLogin ? 'none' : 'block' }}>Invalid username Password</h5>
								<div className="input-group mb-3">
									<div className="input-group-append">
										<span className="input-group-text"><i className="fas fa-user"></i></span>
									</div>
									<input type="text" name="email" className="form-control input_user" value="" placeholder="username" value={formdata.email} onChange={handleChange} />
								</div>
								<div className="input-group mb-2">
									<div className="input-group-append">
										<span className="input-group-text"><i className="fas fa-key"></i></span>
									</div>
									<input type="password" name="password" className="form-control input_pass" value="" placeholder="password" value={formdata.password} onChange={handleChange} />
								</div>


								<div className="d-flex justify-content-center mt-3 login_container">
									<button type="button" name="button" className="btn login_btn" onClick={handleSubmit}>Login</button>
								</div>
							</form>
						</div>

						<div className="mt-4">
							<div className="d-flex justify-content-center links">
								Don't have an account? <Link to="/signup" className="ml-2">Sign Up</Link>
							</div>
							<div className="d-flex justify-content-center links">
								<a href="#">Forgot your password?</a>
								<button onClick={checkLogin}>Click</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

const mapStateToProps = (state) => {
	return {
		getLogin: state.is_logged_in
	}

}
const mapDispatchToProps = (dispatch) => {
	return {
		setLogIn: (data) => dispatch(fetchUserLoggedIn(data))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
