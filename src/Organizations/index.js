import React, { useState, useEffect } from "react"
import {
    Button,
    Row,
    Col,
    Form,
    CardBody,
    Card,
    FormGroup,
    Label,
    Container,
    CardTitle,
    CardSubtitle,
    Input
} from "reactstrap"
import { Link, withRouter, useHistory } from "react-router-dom";
import InputMask from "react-input-mask"
import * as Utility from '../Common/Util';
import { actions } from '../store/organizations/actions'
import { connect } from "react-redux"

const ManageOrganizations = ({ details }) => {
    console.log(details)

    return (
        <div className="page-content">
            <Container fluid>
                <Row className="row justify-content-end">
                    <Col lg="12">
                        <div className="button-items row justify-content-end">
                            <Link to="/add-organizations" className="btn btn-success mr-3 mb-4">
                                <i className="bx bx-arrow-back"></i> Add Organizations
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Website</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details.allOrganizations.map((element, idx) =>
                                    <tr key={idx}>
                                        <td>
                                            {element.organizationName}
                                        </td>
                                        <td>
                                            {element.addressLine1}
                                        </td>
                                        <td>
                                            {element.emailAddress}
                                        </td>
                                        <td>
                                            {element.phoneNumber}
                                        </td>
                                        <td>
                                            {element.websiteUrl}
                                        </td>
                                        <td>

                                            Edit
                                            /  <Link to={`/manage-users/${element.id}`}  >
                                                Manage Users
                                            </Link>
                                        </td>

                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    )
}
//export default AddOrganization

export default connect(

    state => ({
        details: state.organizationDetails
    }),
    actions
)(withRouter(ManageOrganizations))