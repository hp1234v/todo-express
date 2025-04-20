-- Table: todo.todos

-- DROP TABLE IF EXISTS todo.todos;

CREATE SEQUENCE IF NOT EXISTS todo.todos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS todo.todos
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

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo.todos
    OWNER to postgres;