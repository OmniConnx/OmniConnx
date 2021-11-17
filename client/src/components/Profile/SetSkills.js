import Modal from 'react-bootstrap/Modal';
import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './setUserProfile.css';

// class SetSkills extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			show: false,
// 			skills: [],
// 		};
// 	}
// 	handleModal() {
// 		this.setState({ show: !this.state.show });
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<button
// 					style={{ marginLeft: '1vw' }}
// 					onClick={() => {
// 						this.handleModal();
// 					}}
// 				>
// 					+
// 				</button>
// 				<Modal show={this.state.show} onHide={() => this.handleModal()}>
// 					<Modal.Header>Hi</Modal.Header>
// 					<Modal.Body></Modal.Body>
// 					<Modal.Footer></Modal.Footer>
// 				</Modal>
// 			</div>
// 		);
// 	}
// }

function SetSkills() {
	// Modal showing state
	const [show, setShow] = useState(false);

	// useState for skill object

	const [name, setName] = useState('');
	const [proof, setProof] = useState('');

	const handleModal = () => {
		setShow(!show);
	};
	return (
		<div>
			<button
				onClick={() => {
					handleModal();
				}}
			>
				+
			</button>
			<Modal show={show} onHide={() => handleModal()}>
				<Modal.Header closeButton>
					<h3>New Skill</h3>
				</Modal.Header>
				<Modal.Body className="modal-body">
					{/* If Skill name already exists on this account, then don't allow it to be added to db */}
					<label>Skill Name</label>
					<input
						type="text"
						className="skills-form-input"
						onChange={(e) => setName(e.target.value)}
					/>
					<label>Link to certification or proof</label>
					<input
						type="text"
						className="skills-form-input"
						placeholder="Optional..."
						onChange={(e) => setProof(e.target.value)}
					/>
				</Modal.Body>
				<Modal.Footer>
					<button
						onClick={() => {
							const skill = {
								name: name,
								upvotes: 0,
								downvotes: 0,
								proof: proof,
							};
							// console.log(skill);
						}}
					>
						Save
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default SetSkills;
