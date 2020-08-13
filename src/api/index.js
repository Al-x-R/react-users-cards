import _ from 'lodash'
import queryString from 'query-string'
import config from './../config'

const {api, baseUrl, seed} = config

export const getUsers = (options) => {
    const {user} = api
    const defaultOptions = {
        page: 1,
        seed: seed,
        results: 10,
        inc: user.fields,
    }
    const resultingOptions = {
        ...defaultOptions,
        ...options
    }
    const queryParamsObject = _.pick(resultingOptions, user.queryParams)
    const fetchParamsString = queryString
        .stringify(queryParamsObject,
            {arrayFormat: 'comma'}
        )

    fetch(`${baseUrl}?p${fetchParamsString}`)
        .then(res => res.json())
}

