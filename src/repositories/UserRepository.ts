import User from '../models/User';

class UserRepository {
    private users: User[];

    constructor(){
        this.users = [];
    }

    public create ({ name, cpf, cell_number, phone_number,email, password }: Omit<User, 'id'>): User {
        const user = new User({ name, cpf, cell_number, phone_number, email, password });
        
        this.users.push(user);

        return user;
    }

    public findDuplicatedData ({ cpf, cell_number, phone_number,email  }: Omit<User, 'id'|'name'|'password'>): User | null {
        const existentUser = this.users.find( user => {
            if(user.cpf === cpf || user.cell_number === cell_number || user.phone_number === phone_number || user.email === email) {
                return user;
            }
        } );

        return existentUser || null;
    }

    public all (): User[] {
        return this.users;
    }
}

export default UserRepository;