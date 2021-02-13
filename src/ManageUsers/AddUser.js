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
import { Link, withRouter, useHistory, useParams } from "react-router-dom";
import InputMask from "react-input-mask"
import * as Utility from '../Common/Util';
import { actions } from '../store/users/actions'
import { connect } from "react-redux"

const AddUser = ({ addUsers }) => {
    const history = useHistory();
    const { organizationId } = useParams();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState({
        name: '',
        userName: '',
        password: '',
        email: '',
        roleId: ''
    })
    const onInputChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const isDataValid = () => {

        let errorCount = 0;
        if (Utility.isNullOrEmptyOrUndefined(user.name)) {
            errorCount++;
        }

        if (Utility.isNullOrEmptyOrUndefined(user.userName)) {
            errorCount++;
        }
        if (Utility.isNullOrEmptyOrUndefined(user.password)) {
            errorCount++;
        }
        if (Utility.isNullOrEmptyOrUndefined(user.roleId)) {
            errorCount++;
        }
        return errorCount > 0 ? false : true;
    }
    return (
        <div className="page-content">
            <Container fluid>
                <Row className="row justify-content-end">
                    <Col lg="12">
                        <div className="button-items row justify-content-end">
                            <Link to={`/manage-users/${organizationId}`} className="btn btn-success mr-3 mb-4">
                                <i className="bx bx-arrow-back"></i> Back to Manage Users
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle>Add Users</CardTitle>
                                <Form>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="name" className="col-sm-6 col-form-Label">
                                                    Name *
                        </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    value={user.name}
                                                    onChange={onInputChange}
                                                />
                                                {
                                                    isSubmitted && !user.name ? (<div className="invalid-feedback">
                                                        Please enter name
                                                    </div>) : null
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="userName" className="col-sm-6 col-form-Label">
                                                    Username *
                        </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="userName"
                                                    name="userName"
                                                    value={user.userName}
                                                    onChange={onInputChange}
                                                />
                                                {
                                                    isSubmitted && !user.userName ? (<div className="invalid-feedback">
                                                        Please enter username
                                                    </div>) : null
                                                }

                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="password" className="col-sm-3 col-form-Label">
                                                    Pasword *
                        </Label>
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    name="password"
                                                    value={user.password}
                                                    onChange={onInputChange}
                                                />
                                                {
                                                    isSubmitted && !user.password ? (<div className="invalid-feedback">
                                                        Please enter password
                                                    </div>) : null
                                                }
                                            </FormGroup>

                                        </Col>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="email" className="col-sm-6 col-form-Label">
                                                    Email
                        </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    value={user.email}
                                                    onChange={onInputChange}
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="phone" className="col-sm-3 col-form-Label">
                                                    Role *
                                                </Label>

                                                <select
                                                    onChange={onInputChange}
                                                    name="roleId"
                                                    id="roleId"
                                                    value={user.roleId}
                                                    className="custom-select">
                                                    <option defaultValue>Choose Role</option>
                                                    <option value="Organization Admin">Organization Admin</option>
                                                    <option value="User">User</option>
                                                </select>
                                                {
                                                    isSubmitted && !user.roleId ? (<div className="invalid-feedback">
                                                        Please select role
                                                    </div>) : null
                                                }
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className="row justify-content-end">
                                        <Col sm={12}>
                                            <div>
                                                <Button
                                                    style={{ float: 'right' }}
                                                    type="button"
                                                    color="secondary"
                                                    className="w-md mr-2"
                                                    onClick={(e) => {
                                                        history.push(`/manage-users/${organizationId}`);
                                                    }}
                                                >Cancel</Button>
                                                <Button
                                                    style={{ float: 'right' }}
                                                    type="submit"
                                                    color="primary"
                                                    className="w-md mr-2"
                                                    onClick={async (e) => {
                                                        e.preventDefault();

                                                        setIsSubmitted(true)
                                                        
                                                        if (!isDataValid()) {
                                                            return;
                                                        }
                                                        try {
                                                            addUsers({ ...user, organizationId })
                                                            history.push(`/manage-users/${organizationId}`);
                                                        } catch (e) {
                                                        }
                                                    }}
                                                >
                                                    Save User
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default connect(
    state => ({
        details: state.userDetails
    }),
    actions
)(withRouter(AddUser))