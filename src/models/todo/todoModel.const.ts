export const todoModelSQl = {
    getAllTodos: 'SELECT * FROM todo.todos',
    getTodoById: 'SELECT * FROM todo.todos WHERE id = $1 LIMIT 1',
    createTodo: 'INSERT INTO todo.todos (name, email) VALUES ($1, $2) RETURNING *',
    updateTodo: 'UPDATE todo.todos SET name=$1, email=$2 WHERE id=$3 RETURNING *',
    deleteTodo: 'DELETE FROM todo.todos WHERE id = $1 RETURNING *'
}