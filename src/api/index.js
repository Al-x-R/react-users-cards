export const getUsers = () => {
    fetch('https://randomuser.me/api/').then(res => res.json())
}