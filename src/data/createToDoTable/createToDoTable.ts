import { pool } from "../../configs/db";

const createTodoIdSeq = async () => {
    try {
        const query = `CREATE SEQUENCE IF NOT EXISTS todo.todos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;`;
        await pool.query(query, []);
        console.log(`Todo Seq created successfully`);
    } catch (err) {
        console.log(`Todo Seq creation failed`);
    }
};


const createTodosTable = async () => {
    try {
        await createTodoIdSeq()
        const query = `
CREATE TABLE IF NOT EXISTS todo.todos
(
    todo_id integer NOT NULL DEFAULT nextval('todo.todos_id_seq'::regclass),
    todo_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    due_on timestamp without time zone,
    created_on timestamp without time zone NOT NULL DEFAULT now(),
    created_by integer NOT NULL,
    status integer NOT NULL DEFAULT 1,
    CONSTRAINT todos_pkey PRIMARY KEY (todo_id),
    CONSTRAINT todos_created_by_fkey FOREIGN KEY (created_by)
        REFERENCES todo.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT todos_status_fkey FOREIGN KEY (status)
        REFERENCES todo.todo_status (todo_status_id) MATCH SIMPLE
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




export default createTodosTable;