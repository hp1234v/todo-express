import createRolesTable from "./createRolesTable/createRolesTable";
import createToDoSchema from "./createToDoSchema/createToDoSchema";
import addTodoStatus from "./createTodoStatusTable/createTodoStatusTable";
import createTodosTable from "./createToDoTable/createToDoTable";
import createUsersTable from "./createUserTable/createUserTable";


const createDataBase = async () => {
    console.log();
    await createToDoSchema();
    console.log();
    await createRolesTable();
    console.log();
    await createUsersTable();
    console.log();
    await addTodoStatus();
    console.log();
    await createTodosTable();
    console.log();
}


const toWaitTillDBIsCreated = async () => {
    // Waiting till db is up
    setTimeout(async () => {
        await createDataBase();
    }, 2000)
}

export default toWaitTillDBIsCreated;