import React, { Component } from "react";


class PageContent extends Component {   
    render() {
        return (
            <div className="pagecontent">
                {this.props.children}
            </div>
        );
    }
}