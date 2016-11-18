import React from "react"; 
//import FirstName from "./FirstName";
//import LastName from "./LastName";
//import Grade from "./Grade"

export default class Layout extends React.Component {

	handleButton(event){
		event.preventDefault(); 
		let firstname = this.refs.firstname.value
		let lastname = this.refs.lastname.value
		let grade = this.refs.grade.value
		//this.props.addStudentInfo()
		console.log(firstname,lastname,grade)

	}


	render() {
		return(

			<div>
				<form onSubmit={this.handleButton.bind(this)}>
						<div> 
							<label>FirstName</label>
							<div className="col-sm-10">
								<input type="text" placeholder="Click to focus..." ref='firstname' />
							</div>	
						</div>
						<div> 
							<label>LastName</label>
							<div className="col-sm-10">
								<input type="text" placeholder="Click to focus..." ref='lastname' />
							</div>	
						</div>
						<div> 
							<label>Grade</label>
							<div className="col-sm-10">
								<input type="text" placeholder="Click to focus..." ref='grade' />
							</div>	
						</div>
					<div> 
						<button type='submit'>Submit</button>
					</div> 
				</form>
				
			</div>

			)
	}

}



