import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react"
import * as Utility from '../../Common/Util';
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

import { actions } from '../../store/authenticate/actions'
import { connect } from "react-redux"

const Login = ({ login, validateUser }) => {
    
    const history = useHistory();
    if (login.loggedInUser !== null) {
        history.push('/manage-organizations');
    }
   
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        userName: '',
        password: '',
    })
    const onInputChange = e => {
        const { name, value } = e.target
        setLoginDetails({ ...loginDetails, [name]: value })
    }
   
    const isDataValid = () => {
        let errorCount = 0;
        if (Utility.isNullOrEmptyOrUndefined(loginDetails.userName)) {
            errorCount++;
        }

        if (Utility.isNullOrEmptyOrUndefined(loginDetails.password)) {
            errorCount++;
        }


        return errorCount > 0 ? false : true;
    }

    return (
        <React.Fragment>
            <div className="home-btn d-none d-sm-block">
                <Link to="/" className="text-dark">
                    <i className="fas fa-home h2" />
                </Link>
            </div>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">

                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <CardTitle className="text-primary">Login</CardTitle>
                                    <h5>{login.error}</h5>
                                    <Form>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <Label for="userName" className="col-sm-6 col-form-Label">
                                                        UserName *
                        </Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="userName"
                                                        name="userName"
                                                        value={loginDetails.userName}
                                                        onChange={onInputChange}
                                                    />
                                                    {
                                                        isSubmitted && !loginDetails.userName ? (<div className="invalid-feedback">
                                                            Please enter username
                                                        </div>) : null
                                                    }
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <Label for="password" className="col-sm-6 col-form-Label">
                                                        Password *
                        </Label>
                                                    <Input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        value={loginDetails.password}
                                                        onChange={onInputChange}
                                                    />
                                                    {
                                                        isSubmitted && !loginDetails.password ? (<div className="invalid-feedback">
                                                            Please enter password
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
                                                                validateUser(loginDetails, history)
                                                            } catch (e) {
                                                            }
                                                        }}
                                                    >
                                                        Login
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
        </React.Fragment>
    )
}

//export default Login

export default connect(

    state => ({
        login: state.login
    }),
    actions
)(withRouter(Login))