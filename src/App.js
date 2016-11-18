import React from "react"; 
import StudentInformationSubmission from "./components/StudentInformationSubmission/StudentInformationSubmission";
import StudentReport from "./components/StudentReport/StudentReport";
import CommentSelection from "./components/CommentSelection/CommentSelection";


export default class Layout extends React.Component {

	render() {
		return(

			<div>
				<h1>Hello World</h1>
				<StudentInformationSubmission />
			</div>

			)
	}

}

