-- Table: todo.todo_status

-- DROP TABLE IF EXISTS todo.todo_status;

CREATE TABLE IF NOT EXISTS todo.todo_status
(
    todo_status_id integer NOT NULL DEFAULT nextval('todo.todo_status_todo_status_id_seq'::regclass),
    todo_status_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    created_on timestamp without time zone NOT NULL DEFAULT now(),
    created_by integer NOT NULL,
    CONSTRAINT todo_status_pkey PRIMARY KEY (todo_status_id),
    CONSTRAINT todo_status_created_by_fkey FOREIGN KEY (created_by)
        REFERENCES todo.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS todo.todo_status
    OWNER to postgres;


INSERT INTO todo.todo_status(name, created_by)	VALUES ( 'ACTIVE', 1);
INSERT INTO todo.todo_status(name, created_by)	VALUES ( 'PENDING', 1);
INSERT INTO todo.todo_status(name, created_by)	VALUES ( 'COMPLETED', 1);
INSERT INTO todo.todo_status(name, created_by)	VALUES ( 'OVERDUE', 1);