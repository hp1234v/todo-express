-- Table: todo.roles

-- DROP TABLE IF EXISTS todo.roles;

CREATE TABLE IF NOT EXISTS todo.roles
(
    role_id integer NOT NULL DEFAULT nextval('todo.roles_role_id_seq'::regclass),
    role_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (role_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo.roles
    OWNER to postgres;