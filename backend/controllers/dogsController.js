const uuid = require("uuid")
const path = require("path")
const {Dogs} = require("../models/models")
const ApiError =  require("../error/ApiError")

class DogsController{
    async create(req,res, next){
        try{
            const{ name, age, gender, isAvailable } = req.body
            // const{img} = req.file
            // let filename = uuid.v4()+".jpg"
            // img.mv(path.resolve(__dirname, "..", "static",filename))
            const dog = await Dogs.create({ name, age, gender, isAvailable});
            return res.json(dog);
        } catch (e) {
           // next(ApiError.badRequest(e.message))
           return res.json("не работает!")
        }
    }

    async getAll(req,res){
        const {id} = req.query
        res.json(id)
    }

    async getOne(req,res){

    }
}
module.exports = new DogsController()

