import { pool } from "../../configs/db";

const createRolesIdSeq = async () => {
    try {
        const query = `CREATE SEQUENCE IF NOT EXISTS todo.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;`;
        await pool.query(query, []);
        console.log(`Roles Seq created successfully`);
    } catch (err) {
        console.log(`Roles Seq creation failed`);
    }
};


const createRolesTable = async () => {
    try {
        await createRolesIdSeq()
        const query = `CREATE TABLE IF NOT EXISTS todo.roles
(
    role_id integer NOT NULL DEFAULT nextval('todo.roles_id_seq'::regclass),
    role_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (role_id)
)

TABLESPACE pg_default`;
        await pool.query(query, []);
        console.log(`Roles Table created successfully`);
    } catch (err) {
        console.log(`Roles Table creation failed`);
    }
};

const addRoles = async () => {
    try {
        await createRolesTable();
        const roles = ['ADMIN', 'USER'];
        roles.forEach( async (role) => {
            const query = `INSERT INTO todo.roles(role_name) VALUES ($1)`;
            await pool.query(query, [role]);
        })
        console.log(`Roles added created successfully`);
    } catch (err) {
        console.log(`Roles added creation failed`);
    }
}


export default addRoles;