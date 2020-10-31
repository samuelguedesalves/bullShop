import { Router, Request, Response, request, response } from 'express';

import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';

const userRoutes = Router();

const userRepository = new UserRepository();


userRoutes.post('/', ( request: Request, response: Response ) => {
    const { name, cpf, cell_number, phone_number, email, password } = request.body;

    const createUserService = new CreateUserService(userRepository);
    const user = createUserService.execute({ name, cpf, cell_number, phone_number, email, password });

    return response.status(200).json( user );
});

userRoutes.get('/', ( request: Request, response: Response ) => {
    const users = userRepository.all();

    return response.status(200).json(users);
})


export default userRoutes;