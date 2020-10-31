import { v4 } from 'uuid';

class User {
    id: string;
    name: string;
	cpf: number;
	cell_number: string;
	phone_number: string;
	email: string;
    password: string;
    
    constructor({ name, cpf, cell_number, phone_number, email, password }: Omit<User, 'id'>) {
        this.id = v4();
        this.name = name;
        this.cpf = cpf;
        this.cell_number = cell_number;
        this.phone_number = phone_number;
        this.email = email;
        this.password = password;
    }
}

export default User;