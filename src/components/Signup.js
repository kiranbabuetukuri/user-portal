import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/signup.css'
import { SaveSignUp } from './control/SaveSignUp'
function Signup(props) {
	const initialState = { first_name: '', last_name: '', email: '', password: '', password_confirmation: '' }
	const [formdata, setformdata] = useState(initialState)
	const handleChange = (event) => {
		setformdata({ ...formdata, [event.target.name]: event.target.value })
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		let result = SaveSignUp(formdata)
		if (result.error) {
			alert(result.message)
		} else {
			alert(result.message)
			props.history.push('./login')
		}

	}
	return (
		<div>

			<div className="container">
				<div className="row centered-form">
					<div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Please sign up for Portal  </h3>
							</div>
							<div className="panel-body">
								<form role="form">
									<div className="row">
										<div className="col-xs-6 col-sm-6 col-md-6">
											<div className="form-group">
												<input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" value={formdata.first_name} onChange={handleChange} />
											</div>
										</div>
										<div className="col-xs-6 col-sm-6 col-md-6">
											<div className="form-group">
												<input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" value={formdata.last_name} onChange={handleChange} />
											</div>
										</div>
									</div>

									<div className="form-group">
										<input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" value={formdata.email} onChange={handleChange} />
									</div>

									<div className="row">
										<div className="col-xs-6 col-sm-6 col-md-6">
											<div className="form-group">
												<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" value={formdata.password} onChange={handleChange} />
											</div>
										</div>
										<div className="col-xs-6 col-sm-6 col-md-6">
											<div className="form-group">
												<input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password" value={formdata.password_confirmation} onChange={handleChange} />
											</div>
										</div>
									</div>

									<input type="submit" value="Register" className="btn btn-info btn-block signup_btn" onClick={handleSubmit} />
									<Link to='/login' className="btn btn-info btn-block signup_btn"   > Login</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Signup
