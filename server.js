const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');


const generateUser = () => ({
    _id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNum(),
    email: faker.internet.email(),
    passsword: faker.internet.password(),
});

const generateCompany = () => ({
    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
    },
});

app.get("/api/users/new", (req, res) => {
    const newUser = generateUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = generateCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = generateUser();
    const newCompany = generateCompany();
    const responseObject = {
    user: newUser,
    company: newCompany,
    };
    res.json(responseObject);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );