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

const AddOrganization = ({ details, addOrganization }) => {
    console.log(details)
    const history = useHistory();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [organization, setOrganization] = useState({
        id: '',
        organizationName: '',
        addressLine1: '',
        phoneNumber: '',
        emailAddress: '',
        websiteUrl: ''
    })
    const onInputChange = e => {
        const { name, value } = e.target
        setOrganization({ ...organization, [name]: value })
    }

    const isDataValid = () => {
        let errorCount = 0;
        if (Utility.isNullOrEmptyOrUndefined(organization.organizationName)) {
            errorCount++;
        }

        if (Utility.isNullOrEmptyOrUndefined(organization.addressLine1)) {
            errorCount++;
        }
        if (Utility.isNullOrEmptyOrUndefined(organization.phoneNumber)) {
            errorCount++;
        }
        else {
            if (organization.phoneNumber.length !== 14 || organization.phoneNumber.includes('_')) {
                errorCount++;
            }
        }

        return errorCount > 0 ? false : true;
    }
    return (
        <div className="page-content">
            <Container fluid>
                <Row className="row justify-content-end">
                    <Col lg="12">
                        <div className="button-items row justify-content-end">
                            <Link to="/manage-organizations" className="btn btn-success mr-3 mb-4">
                                <i className="bx bx-arrow-back"></i> Back to Organizations
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle>Add Organization</CardTitle>
                                <Form>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="organizationName" className="col-sm-6 col-form-Label">
                                                    Organization Name *
                        </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="organizationName"
                                                    name="organizationName"
                                                    value={organization.organizationName}
                                                    onChange={onInputChange}
                                                />
                                                {
                                                    isSubmitted && !organization.organizationName ? (<div className="invalid-feedback">
                                                        Please enter organization name
                                                    </div>) : null
                                                }
                                            </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="addressLine1" className="col-sm-6 col-form-Label">
                                                    Organization Address *
                        </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="addressLine1"
                                                    name="addressLine1"
                                                    value={organization.addressLine1}
                                                    onChange={onInputChange}
                                                />
                                                {
                                                    isSubmitted && !organization.addressLine1 ? (<div className="invalid-feedback">
                                                        Please enter address
                                                    </div>) : null
                                                }

                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="websiteUrl" className="col-sm-3 col-form-Label">
                                                    Website
                        </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="websiteUrl"
                                                    name="websiteUrl"
                                                    value={organization.websiteUrl}
                                                    onChange={onInputChange}
                                                />
                                            </FormGroup>

                                        </Col>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="emailAddress" className="col-sm-6 col-form-Label">
                                                    Organization Email
                        </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="emailAddress"
                                                    name="emailAddress"
                                                    value={organization.emailAddress}
                                                    onChange={onInputChange}
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                            <FormGroup>
                                                <Label for="phone" className="col-sm-3 col-form-Label">
                                                    Phone *
                                                </Label>

                                                <InputMask
                                                    id="phone"
                                                    name="phoneNumber"
                                                    mask="(999) 999-9999"
                                                    className="form-control"
                                                    value={organization.phoneNumber}
                                                    onChange={onInputChange}
                                                >
                                                </InputMask>
                                                {
                                                    isSubmitted && !organization.phoneNumber ? (<div className="invalid-feedback">
                                                        Please enter phone number
                                                    </div>) : null
                                                }
                                                {
                                                    isSubmitted && organization.phoneNumber && (organization.phoneNumber.length !== 14 || organization.phoneNumber.includes('_')) ? (<div className="invalid-feedback">
                                                        Please enter valid phone number
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
                                                        history.push('/manage-organizations');
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
                                                            addOrganization(organization)
                                                            history.push('/manage-organizations');
                                                        } catch (e) {
                                                        }
                                                    }}
                                                >
                                                    Add Organization
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
//export default AddOrganization

export default connect(

    state => ({
        details: state.organizationDetails
    }),
    actions
)(withRouter(AddOrganization))