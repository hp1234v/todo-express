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
        await createUserIdSeq()
        const query = `CREATE TABLE IF NOT EXISTS todo.users
        (
            user_id integer NOT NULL DEFAULT nextval('todo.users_id_seq'::regclass),
            name character varying(100) COLLATE pg_catalog."default" NOT NULL,
            email character varying(100) COLLATE pg_catalog."default" NOT NULL,
            created_on timestamp without time zone NOT NULL DEFAULT now(),
            role_id integer NOT NULL DEFAULT 2,
            CONSTRAINT users_pkey PRIMARY KEY (user_id),
            CONSTRAINT constraint_name UNIQUE (email),
            CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id)
                REFERENCES todo.roles (role_id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
        )

        TABLESPACE pg_default`;
        await pool.query(query, []);
        console.log(`Users Table created successfully`);
    } catch (err) {
        console.log(`Users Table creation failed`);
    }
};

const createAdminUser = async () => {
    try {
            await createUsersTable();
            const query = `INSERT INTO todo.users(name, email, role_id) VALUES ($1, $2, $3)`;
            await pool.query(query, ['Admin', 'admin@gmail.com', 1]);
            console.log(`Admin added created successfully`);
        } catch (err) {
            console.log(`Adding Admin failed`);
        }
}




export default createAdminUser;