import React, {Component} from "react"
import {getUsers} from "../../api"
import UserCard from './../UserCard'
import styles from './UsersCardsLoader.module.scss'
import Spinner from './../Spinner'
import Error from './../Error'

class DataLoader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFetching: true,
            users: [],
            error: null,
            currentPage: 1,
        }
    }

    loadUsers = () => {
        const {currentPage, users} = this.state
        getUsers({
            page: currentPage,
        })
            .then(data => {
                this.setState({
                    page: currentPage,
                    users: users.concat(data.results),
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

    componentDidMount() {
        this.loadUsers()
    }

    componentDidUpdate(prevProps, prevState) {
        const {currentPage,} = this.state
        if (prevState.currentPage !== currentPage) {
            this.loadUsers()
        }
    }

    next = () => {
        const {currentPage} = this.state
        this.setState({
            currentPage: currentPage + 1,
        })
    }

    render() {
        const {isFetching, users, error} = this.state

        if (error) {
            return <Error />
        }
        if (isFetching) {
            return <Spinner/>
        }
        return (
            <div>
                <article className={styles.usersCards}>
                    {users.map(user => (
                        <UserCard key={user.email} user={user}/>
                    ))}
                </article>
                <button onClick={this.next}>Download more</button>
            </div>
        )
    }
}

export default DataLoader