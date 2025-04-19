import { pool } from "../../configs/db";

const createUserIdSeq = async () => {
    try {
        const query = `CREATE SEQUENCE IF NOT EXISTS todo.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;`;
        await pool.query(query, []);
        console.log(`User Seq created successfully`);
    } catch (err) {
        console.log(`User Seq creation failed`);
    }
};


const createUsersTable = async () => {
    try {
        setTimeout(async () => {
            await createUserIdSeq()
            const query = `CREATE TABLE IF NOT EXISTS todo.users
            (
                id integer NOT NULL DEFAULT nextval('todo.users_id_seq'::regclass),
                name character varying(100) COLLATE pg_catalog."default" NOT NULL,
                email character varying(100) COLLATE pg_catalog."default" NOT NULL,
                created_on timestamp without time zone NOT NULL DEFAULT now(),
                CONSTRAINT users_pkey PRIMARY KEY (id),
                CONSTRAINT constraint_name UNIQUE (email)
            )

            TABLESPACE pg_default`;
            await pool.query(query, []);
            console.log(`User Table created successfully`);
        }, 2000)
    } catch (err) {
        console.log(`User Table creation failed`);
    }
};




export default createUsersTable;