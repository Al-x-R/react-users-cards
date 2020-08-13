export default {
    api: {
        baseUrl: 'https://randomuser.me/api/',
        seed: 'abc',
        user: {
            queryParams: ['seed', 'page', 'results', 'inc'],
            fields: ['id', 'email', 'picture', 'name', 'gender'],
        }
    }
}