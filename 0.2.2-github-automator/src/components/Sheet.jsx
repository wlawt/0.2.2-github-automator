import React, { Component, Fragment } from 'react'
import axios from "axios"

class Sheet extends Component {
    constructor() {
        super()

        this.state = {
            all_repos: [],
            all_prs: []
        }
    }

    componentWillMount() {
        axios.get("/github").then(res => console.log(res)).catch(e => console.log(e))
    }

    render() {
        console.log(this.state.all_prs)
        return (
            <Fragment>
                <h1>hello</h1>
            </Fragment>
        )
    }
}

export default Sheet