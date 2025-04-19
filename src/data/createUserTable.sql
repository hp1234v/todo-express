-- Table: todo.users

-- DROP TABLE IF EXISTS todo.users;

CREATE SEQUENCE IF NOT EXISTS todo.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS todo.users
(
    id integer NOT NULL DEFAULT nextval('todo.users_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT constraint_name UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo.users
    OWNER to postgres;