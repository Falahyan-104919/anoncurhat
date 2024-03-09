const { refreshDb, connectDb, disconnectDb } = require('../setup/dbSetup.js');
const { server } = require('../../server.js');
const supertest = require('supertest');
const { Posts, Users } = require('../../db/models/index.js');
const bcrypt = require('bcrypt');

beforeEach(async () => {
  await refreshDb();
  await connectDb();
});
afterAll(async () => {
  await disconnectDb();
});
describe('/GET Curhat', () => {
  it('Should Return Array of Object Curhat', async () => {
    await Posts.findAll({
      where: {
        active: true,
      },
    });
    await supertest(server)
      .get('/posts')
      .expect(200)
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});

describe('/POST Curhat', () => {
  it('Should Return Message Contain Curhat ID', async () => {
    let token;
    await Users.create({
      username: 'testcreate1',
      password: await bcrypt.hash('testpassword1', 10),
      gender: 'male',
      date_of_birth: '1990-01-01',
    });

    await supertest(server)
      .post('/auth/login')
      .send({ username: 'testcreate1', password: 'testpassword1' })
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        token = res.body.token;
      });

    await supertest(server)
      .post('/posts')
      .send({
        content: 'TEST BUAT POSTS',
      })
      .set('Authorization', token)
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('message');
      });
  });
});

describe('/PUT Curhat', () => {
  it('Should Return Message Successfully When Editing a Posts', async () => {
    let token;
    let user_id;
    await Users.create({
      username: 'testcreate1',
      password: await bcrypt.hash('testpassword1', 10),
      gender: 'male',
      date_of_birth: '1990-01-01',
    });

    await supertest(server)
      .post('/auth/login')
      .send({ username: 'testcreate1', password: 'testpassword1' })
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        token = res.body.token;
        user_id = res.body.user_data['id_user'];
      });

    const { id_post } = await Posts.create({ user_id, content: 'TEST PUT' });

    await supertest(server)
      .put('/posts')
      .send({ id_post, content: 'TEST PUT EDITED' })
      .set('Accept', 'application/json')
      .set('Authorization', token)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('message');
      });
  });
});

describe('/DELETE Curhat', () => {
  it('Should Return Message Successfully When Deleting a Posts', async () => {
    let token;
    let user_id;
    await Users.create({
      username: 'testcreate1',
      password: await bcrypt.hash('testpassword1', 10),
      gender: 'male',
      date_of_birth: '1990-01-01',
    });

    await supertest(server)
      .post('/auth/login')
      .send({ username: 'testcreate1', password: 'testpassword1' })
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        token = res.body.token;
        user_id = res.body.user_data['id_user'];
      });

    const { id_post } = await Posts.create({ user_id, content: 'TEST DELETE' });

    await supertest(server)
      .delete(`/posts/${id_post}`)
      .set('Authorization', token)
      .set('Accept', 'application/json')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('message');
      });
  });
});
