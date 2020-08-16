import _ from 'lodash'
import queryStr from 'query-string'
import config from './../config'

const {api: {baseUrl, seed, user}} = config

export const getUsers = (options) => {

    const defaultOptions = {
        page: 1,
        seed: seed,
        results: 4,
        inc: user.fields,
    }
    const resultingOptions = {
        ...defaultOptions,
        ...options
    }
    const queryParamsObj = _.pick(resultingOptions, user.queryParams)
    const fetchParamsStr = queryStr.stringify(queryParamsObj, {arrayFormat: 'comma'})
    return fetch(`${baseUrl}?${fetchParamsStr}`).then(res => res.json())
}