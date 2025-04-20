-- Table: todo.users

-- DROP TABLE IF EXISTS todo.users;

CREATE TABLE IF NOT EXISTS todo.users
(
    id integer NOT NULL DEFAULT nextval('todo.users_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT now(),
    role_id integer NOT NULL DEFAULT 2,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT constraint_name UNIQUE (email),
    CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id)
        REFERENCES todo.roles (role_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo.users
    OWNER to postgres;