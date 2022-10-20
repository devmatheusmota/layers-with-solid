import Connection from './Connection';
import pgp from 'pg-promise';

export default class PostgreSQLAdapter implements Connection {
	connection: any;
	constructor() {
		this.connection = pgp()(
			'postgres://postgres:27098912@app.cpnsiy7hsa9v.sa-east-1.rds.amazonaws.com:5432/app'
		);
	}
	query(statement: string, params: any): Promise<any> {
		return this.connection.query(statement, params);
	}
	one(statement: string, params: any): Promise<any> {
		return this.connection.one(statement, params);
	}
	close(): Promise<void> {
		return this.connection.$pool.end();
	}
}
