import ExpressAdapter from './infra/api/ExpressAdapter';
import Router from './infra/api/Router';
import PostgreSQLAdapter from './infra/database/PostgreSQLAdapter';
import TransactionDatabaseRepository from './infra/repository/TransactionDatabaseRepository';
import TransactionMemoryRepository from './infra/repository/TransactionMemoryRepository';

const connection = new PostgreSQLAdapter();
const transactionRepository = new TransactionDatabaseRepository(connection); // Com banco de dados
// const transactionRepository = new TransactionMemoryRepository(); // Com banco de dados em memoria
const httpServer = new ExpressAdapter();
const router = new Router(httpServer, transactionRepository);

router.init();
httpServer.listen(3333, () => {
	console.log('Listening on http://localhost:3333');
});
