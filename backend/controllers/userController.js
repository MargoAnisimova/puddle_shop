const ApiError = require("../error/ApiError")
const { User } = require("../models/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class UserController{
    async registration(req, res, next){
            const {email, password, role} = req.body
            if (!email || !password){
                return next(ApiError.badRequest("Некорректный email или пароль"))
            }
            const checkEmail = await User.findOne({where:{email}})
            if(checkEmail){
                return next(ApiError.badRequest("Данный email уже существует"))
            }

            const hashPassword = await bcrypt.hash(password,5)

            const user = await User.create({
                name: "Ivanov", 
                surname: "Ivanovich",
                email,
                password: hashPassword,
                role
            })

            const token = jwt.sign({id:user.id, email, role}, process.env.SECRET_KEY, {expiresIn:"24h"})
            return res.json({message:token})
    }
    async login(req, res){
        
    }
    async auth(req,res){
        return res.json({message:"123"})
    }
}
module.exports = new UserController()
