import { Router } from 'express';

const userRouter = Router();

userRouter.post('/signin', (req,res) => {
    return res.send('Entrando com o usuário');
})

userRouter.post('/signup', (req,res) => {
    return res.send('Criando um usuário');
})

export default userRouter;