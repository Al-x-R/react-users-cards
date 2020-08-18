import React, {Component} from "react"
import {getUsers} from "../../api"
import UserCard from './../UserCard'
import styles from './UsersCardsLoader.module.scss'
import Spinner from './../Spinner'
import Error from './../Error'
import Pagination from './../Pagination'


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
        const {currentPage} = this.state
        this.setState({
            isFetching: true,
        })
        getUsers({
            page: currentPage,
        })
            .then(data => {
                this.setState({
                    page: currentPage,
                    users: data.results,
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

    onChangePage = (page) => {
        this.setState({
            currentPage: page
        })
    }

    next = () => {
        const {currentPage} = this.state
        this.setState({
            currentPage: currentPage + 1,
        })
    }

    prev = () => {
        const {currentPage} = this.state
        if (currentPage > 2) {
            this.setState({
                currentPage: currentPage - 1,
            })
        } else {
            this.setState({
                currentPage: 1,
            })
        }
    }

    render() {
        const {isFetching, users, error, currentPage} = this.state

        if (error) {
            return <Error/>
        }
        if (isFetching) {
            return <Spinner/>
        }

        return (
            <div className={styles.main}>
                <article className={styles.usersCards}>
                    {users.map(user => (
                        <UserCard key={user.email} user={user}/>
                    ))}
                </article>
                <Pagination onPrevClick={this.prev}
                            onPageClick={this.onChangePage}
                            onNextClick={this.next} currentPage={currentPage}/>
            </div>
        )
    }
}

export default DataLoader