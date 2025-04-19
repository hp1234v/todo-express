-- Table: todo.users

-- DROP TABLE IF EXISTS todo.users;

CREATE TABLE IF NOT EXISTS todo.users
(
    id integer NOT NULL DEFAULT nextval('todo.users_id_seq'::regclass),
    name character varying(100)[] COLLATE pg_catalog."default" NOT NULL,
    email character varying(100)[] COLLATE pg_catalog."default" NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT constraint_name UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo.users
    OWNER to postgres;