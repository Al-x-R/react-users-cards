import React, {Component} from "react"
import {getUsers} from "../../api"

class DataLoader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFetching: true,
            users: [],
            error: null,
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
            // const {results} = data
            this.setState({
                users: data.results,
                isFetching: false,
            })
        })
    }

    render() {
        const {isFetching, users, error} = this.state

        if (error) {
            return <div>Error</div>
        }
        if (isFetching) {
            return <div>Loading...</div>
        }
        return <ul>
            {users.map(user => (<li>{JSON.stringify(user, null, '\t')}</li>))}
        </ul>
    }
}

export default DataLoader