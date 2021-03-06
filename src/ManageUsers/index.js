import React, { useState, useEffect } from "react"
import {
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
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import { actions } from '../store/users/actions'
import { connect } from "react-redux"

const ManageUsers = ({ details, login, getAllUsers }) => {
    console.log(details)
    console.log(login.loggedInUser)
    const { organizationId } = useParams();
    //const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers(organizationId)
    }, [])

    return (
        <div className="page-content">
            <Container fluid>
                <Row className="row justify-content-end">
                    <Col lg="12">
                        <div className="button-items row justify-content-end">
                            {
                                login.loggedInUser !== null && login.loggedInUser.roleId === 'admin' ?
                                    (<Link to="/manage-organizations" className="btn btn-info mr-3 mb-4">
                                        Back to Organizations
                                    </Link>)
                                    : null
                            }

                            <Link to={`/add-user/${organizationId}`} className="btn btn-success mr-3 mb-4">
                                Add User
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
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details.allUsers && details.allUsers.map((element, idx) =>
                                    <tr key={idx}>
                                        <td>
                                            {element.name}
                                        </td>
                                        <td>
                                            {element.userName}
                                        </td>
                                        <td>
                                            {element.email}
                                        </td>
                                        <td>
                                            {element.roleId}
                                        </td>
                                        <td>
                                            Edit / Delete
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
export default connect(

    state => ({
        details: state.userDetails,
        login: state.login
    }),
    actions
)(withRouter(ManageUsers))