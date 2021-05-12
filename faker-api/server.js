const express = require("express");
const app = express();
const port = 8000;

const faker = require("faker");

class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password= faker.internet.password();
    }
};


class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = faker.fake("{{address.streetAddress}}, {{address.city}} {{address.zipCode}} {{address.country}}");
    }
};

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
        res.json( new User() );
    });

app.get("/api/companies/new", (req, res) => {
        res.json( new Company() );
    });

    app.get("/api/user/company", (req, res) => {
        let user = new User();
        let company = new Company();
        res.json( [user, company]);
    });

app.listen( port, () => console.log(`Listening on port: ${port}`) );