const AuthService = require('../service/auth.service')
const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.register = async (request, response) => {

  const { name } = request.body

  if (!name) {
    return response.status(400).json({ message: "Favor inserir o nome" })
  }

  const userAlreadyregistred = await AuthService.validatedUserAlreadyRegistered(name)

  if (userAlreadyregistred.length > 0) {
    return response.status(409).json({ message: "Usuário já cadastrado" })
  }
  const token = jwt.sign(
    { name },
    process.env.TOKEN_SECRET,
    { expiresIn: '2d' }
  )
  const logInUser = await AuthService.registerUser({ name, token })

  return response.status(201).json(logInUser)
}