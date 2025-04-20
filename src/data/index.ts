import createToDoSchema from "./createToDoSchema/createToDoSchema";
import createTodosTable from "./createToDoTable/createToDoTable";
import createUsersTable from "./createUserTable/createUserTable";


const createDataBase = async () => {
    await createToDoSchema();
    await createUsersTable();
    await createTodosTable();
}


const toWaitTillDBIsCreated = async () => {
    // Waiting till db is up
    setTimeout(async () => {
        await createDataBase();
    }, 2000)
}

export default toWaitTillDBIsCreated;