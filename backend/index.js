const express = require('express');
const app = express();
const faker = require('faker');

const PORT = 4000;

function generateData(length) {
  const data = [];
  for (let i = 0; i < length; i++) {
    const password = faker.internet.password();
    const user = {
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      sex: "Male",
      age: faker.random.number(),
      password: password,
      repeatPassword: password
    };
    data.push(user);
  }
  return data;
}

app.get('/api/users', (req, res) => {
  const users = generateData(5);
  setTimeout(() => {
    res.status(200).json(users);
  }, 5000);
});

app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});
