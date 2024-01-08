import React from 'react'
import { Modal } from 'react-bootstrap'

type Props = {
    show:boolean;
}

function AddModal({}: Props) {
  return (
    <>
    <Modal show={this.props.show} id="addEmployeeModal" className="modal fade">
	<div className="modal-dialog">
		<div className="modal-content">
			<form>
				<div className="modal-header">						
					<h4 className="modal-title">Add Employee</h4>
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Name</label>
						<input type="text" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" required/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<textarea className="form-control" required></textarea>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="text" className="form-control" required/>
					</div>					
				</div>
				<div className="modal-footer">
					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
					<input type="submit" className="btn btn-success" value="Add"/>
				</div>
			</form>
		</div>
	</div>
</Modal></>
  )
}

export default AddModal