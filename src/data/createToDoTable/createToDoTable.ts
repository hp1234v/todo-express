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
        const query = `CREATE TABLE IF NOT EXISTS todo.todos
                            (
                                id integer NOT NULL DEFAULT nextval('todo.todos_id_seq'::regclass),
                                name character varying(100) COLLATE pg_catalog."default" NOT NULL,
                                decription text COLLATE pg_catalog."default",
                                due_on timestamp without time zone NOT NULL,
                                created_on timestamp without time zone NOT NULL,
                                created_by numeric NOT NULL,
                                CONSTRAINT fk_user FOREIGN KEY (id)
                                    REFERENCES todo.users (id) MATCH SIMPLE
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