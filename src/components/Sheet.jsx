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
        // Get all the repos under owner ("MLH-fellowship")
        axios.get("https://api.github.com/users/MLH-Fellowship/repos").then(res => {
            for (var i = 0; i < res.data.length; i++) {
                this.setState({ all_repos: this.state.all_repos.concat(res.data[i].name) })
            }

            this.state.all_repos.map(repo => {
                axios.get(`https://api.github.com/repos/MLH-Fellowship/${repo}/pulls?state=open`).then(pull_res => {
                    const repo_status = {
                        name: repo,
                        assignee: pull_res.assignee ? null : pull_res.assignees,
                        reviewers: pull_res.requested_reviewers,
                        created_at: pull_res.created_at,
                        updated_at: pull_res.updated_at
                    }

                    this.setState({ all_prs: this.state.all_prs.concat(repo_status) })
                })
            })
        })

        /* fetch("https://api.github.com/users/MLH-Fellowship/repos", {

            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => console.log(res.data)) */
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