import React, { FormEvent } from 'react'

import '../css/login.css'
import { useNavigate } from 'react-router-dom';
export default function Login() {
const mynav = useNavigate();


  const clickSubmitt = (e:FormEvent)=>{

    e.preventDefault();
    mynav("/home");
  }
  return (
    <div className='bgImage'>
      

<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form onSubmit={clickSubmitt}>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
            
						<input type="text" 
            className="form-control" placeholder="username" />
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password" />
					</div>
				
					<div className="form-group">
						<input type="submit" value="Login" className="btn btn-success" />
					</div>
				</form>
			</div>
			
		</div>
	</div>
</div>




    </div>
  )
}
