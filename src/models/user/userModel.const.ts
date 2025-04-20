export const userModelSQl = {
    getAllUsers: 'SELECT * FROM todo.users',
    getUserById: 'SELECT * FROM todo.users WHERE id = $1 LIMIT 1',
    createUser: 'INSERT INTO todo.users (name, email) VALUES ($1, $2) RETURNING *',
    updateUser: 'UPDATE todo.users SET name=$1, email=$2 WHERE id=$3 RETURNING *',
    deleteUser: 'DELETE FROM todo.users WHERE id = $1 RETURNING *'
}