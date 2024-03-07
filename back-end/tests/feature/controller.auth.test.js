const { refreshDb, connectDb, disconnectDb } = require('../setup/dbSetup.js')
const { server } = require('../../server.js')
const supertest = require('supertest')
const { Users } = require('../../db/models')
const bcrypt = require('bcrypt');

describe("Login controller test", () => {

  // harus di panggil di setiap test case
  beforeEach(refreshDb)

  // harus di panggil di setiap test case
  beforeAll(connectDb)

  // harus di panggil di setiap test case
  afterAll(disconnectDb)

  it("can loggin in user if user registered", async () => {
    await Users.create({
      username: "testing",
      password: await bcrypt.hash("password", 10),
      gender: "L",
      date_of_birth: '1990-01-01',
    })

    await supertest(server)
      .post('/auth/login')
      .send({
        username: "testing",
        password: "password"
      })
      .expect(200)
      .then(response => {
        expect(response.body.user_data.username).toBe('testing')
      })

  })

})
