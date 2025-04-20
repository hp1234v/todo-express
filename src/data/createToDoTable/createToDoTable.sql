-- Table: todo.todos

-- DROP TABLE IF EXISTS todo.todos;

CREATE TABLE IF NOT EXISTS todo.todos
(
    todo_id integer NOT NULL DEFAULT nextval('todo.todos_todo_id_seq'::regclass),
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

TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo.todos
    OWNER to postgres;