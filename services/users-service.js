const codeStatus = require('../constants/constants');
const messages = require('../constants/messages');
const { generateJwt } = require('../helpers/generate-jwt');
const usersRepository = require('../repositories/users-repository');
const bcrypt = require('bcrypt');

module.exports={
    login: async (req,res) =>{
        try {
            const {email, password} = req.body;
            //const user = await usersRepository.existsUser(email);
            const user ={
                email,
                password:'123456'
            }
            console.log(user)
            if (!user){
                res.status(codeStatus.NOT_FOUND_ERROR).json({
                    ok: false,
                  });
            }
            else {
                //const success = bcrypt.compareSync(password, user.password);
                const success= true;
                if (success) {
                    const token = await generateJwt(user);
                    res.status(codeStatus.RESPONSE_OK).json({
                        user,
                        token
                    })
                }
                else{
                    res.status(codeStatus.NOK_USER_CREDENTIALS).json(messages.UNAUTHORIZED_USER_CREDENTIALS);
                }
            }
        } catch (error) {
            res.status(codeStatus.INTERNAL_ERROR).json(messages.INTERNAL_ERROR)
        }
    }
}