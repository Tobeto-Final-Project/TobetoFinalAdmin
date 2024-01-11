import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";

import { Col, Row, Toast } from "react-bootstrap";

type Props = {
	label: string;
	name: string;
	type?: string;
	placeHolder?: string;
	value?: string;
};

const FormikInput = (props: Props) => {
	const [show, setShow] = useState(false);

	return (
		<div className="mb-3 ">
			<label className="form-label">{props.label}</label>
			<Field
				name={props.name}
				type={props.type || "text"}
				className="login-input"
				placeholder={props.placeHolder}
			
			/>
			
			<ErrorMessage name={props.name}>
				{message => <Row>
					<Col xs={12}>
						<Toast onClose={() => setShow(false)} show={true} delay={3000} autohide>
							<Toast.Body >{message}</Toast.Body>
						</Toast>
					</Col>

				</Row>}
			</ErrorMessage>
		</div>
	);
};

export default FormikInput;