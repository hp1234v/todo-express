export const todoModelSQl = {
    getAllTodos: 'SELECT * FROM todo.todos',
    getTodoById: 'SELECT * FROM todo.todos WHERE todo_id = $1 LIMIT 1',
    createTodo: 'INSERT INTO todo.todos(todo_name, description, due_on, created_by, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    updateTodo: 'UPDATE todo.todos SET todo_name=$2, description=$3, due_on=$4, created_by=$5, status=$6 WHERE todo_id=$1 RETURNING *',
    deleteTodo: 'DELETE FROM todo.todos WHERE todo_id = $1 RETURNING *'
}


export const statusData: any = {
    ['ACTIVE']: 1,
    ['PENDING']: 2,
    ['COMPLETED']: 3,
    ['OVERDUE']: 4
}