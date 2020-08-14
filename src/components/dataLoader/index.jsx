import React, {Component} from "react"
import {getUsers} from "../../api"
import UserCard from './../UserCard'

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
        getUsers().then(data => {
                const {results} = data
                this.setState({
                    users: results,
                    isFetching: false,
                })
            })
            .catch(error => {
                this.setState({
                    error,
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
        return (
            <ul>
                {users.map(user => (
                    <UserCard key={user.email} user={user}/>
                ))}
            </ul>
        )
    }
}

export default DataLoader