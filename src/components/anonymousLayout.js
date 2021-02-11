import React, { Component } from "react"


class AnonymousLayout extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <React.Fragment>

                <div id="layout-wrapper">
                    <h2>Thanos</h2>
                    <div className="main-content">{this.props.children}</div>

                </div>
            </React.Fragment>
        )
    }
}

export default AnonymousLayout
