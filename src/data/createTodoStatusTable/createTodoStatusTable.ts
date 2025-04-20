import { pool } from "../../configs/db";

const createTodoStatusIdSeq = async () => {
    try {
        const query = `CREATE SEQUENCE IF NOT EXISTS todo.todos_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;`;
        await pool.query(query, []);
        console.log(`Todo Status Seq created successfully`);
    } catch (err) {
        console.log(`Todo Satus Seq creation failed`);
    }
};


const createTodosTable = async () => {
    try {
        await createTodoStatusIdSeq()
        const query = `
CREATE TABLE IF NOT EXISTS todo.todo_status
(
    todo_status_id integer NOT NULL DEFAULT nextval('todo.todos_status_id_seq'::regclass),
    todo_status_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT now(),
    created_by integer NOT NULL,
    CONSTRAINT todo_status_pkey PRIMARY KEY (todo_status_id),
    CONSTRAINT todo_status_created_by_fkey FOREIGN KEY (created_by)
        REFERENCES todo.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default`;
        await pool.query(query, []);
        console.log(`Todos Table created successfully`);
    } catch (err) {
        console.log(`Todos Table creation failed`);
    }
};


const addTodoStatus = async () => {
    try {
            await createTodosTable();
            const statuses = ['ACTIVE', 'PENDING', 'COMPLETED', 'OVERDUE'];
            statuses.forEach( async (status) => {
                const query = `INSERT INTO todo.todo_status(todo_status_name, created_by)	VALUES ($1, 1)`;
                await pool.query(query, [status]);
            })
            console.log(`Todo status added created successfully`);
        } catch (err) {
            console.log(`Todo status added creation failed`);
        }
}

export default addTodoStatus;