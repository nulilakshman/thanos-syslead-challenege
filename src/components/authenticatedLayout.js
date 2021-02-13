import React, { Component } from "react"
import {
    Row,
    Col,
    Button
} from "reactstrap"

const AuthenticatedLayout = (props) => {
    return (
        <React.Fragment>

            <div id="layout-wrapper">

                <Row className="row ">
                    <Col lg="6">
                        <h2>Thanos</h2>
                    </Col>
                    <Col lg="6">
                        <div className="button-items row justify-content-end">
                            <Button className="btn btn-danger mr-3 mb-4"
                                onClick={(e) => {
                                    localStorage.removeItem("AUTH_USER")
                                    window.location.href='/login'
                                }}>
                                Logout
                            </Button>
                        </div>
                    </Col>
                </Row>
                <div className="main-content">{props.children}</div>

            </div>
        </React.Fragment>
    )

}

export default AuthenticatedLayout
