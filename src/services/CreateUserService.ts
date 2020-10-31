import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

class CreateUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    public execute ({ name, cpf, cell_number, phone_number, email, password }: Omit<User, 'id'>): User {
        const duplicatedUser = this.userRepository.findDuplicatedData({ cpf, cell_number, phone_number, email });

        if(duplicatedUser){
            throw new Error('Also data is already existent');
        }

        const user = this.userRepository.create({ name, cpf, cell_number, phone_number, email, password });

        return user;
    }
}

export default CreateUserService;