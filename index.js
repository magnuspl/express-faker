const express = require('express');
const faker = require('faker/locale/nb_NO');
const _ = require('lodash');

const app = express();

app.use(express.static('public'));

app.get('/organisations', (req, res) => {
    const count = req.query.count;
    if (!count) {
        return res.status(400).send({
            errorMsg: 'count query parameter is missing.'
        });
    }

    res.send(
        _.times(count, () => {
            return {
                organisationName: faker.company.companyName(),
                organisationId: faker.datatype.number({
                    'min': 100000000,
                    'max': 999999999
                }),
                address: faker.address.streetAddress(true),
            };
        })
    );
});

app.get('/organisation', (req, res) => {
    const seed = req.query.seed;
    if (!seed) {
        return res.status(400).send({
            errorMsg: 'seed query parameter is missing.'
        });
    }
    faker.seed(parseInt(seed));
    res.send(
        {
            organisationName: faker.company.companyName(),
            organisationId: faker.datatype.number({
                'min': 100000000,
                'max': 999999999
            }),
            address: faker.address.streetAddress(true),
        }
    );
});

app.get('/invoice', (req, res) => {
    const seed = req.query.seed;
    if (!seed) {
        return res.status(400).send({
            errorMsg: 'seed query parameter is missing.'
        });
    }
    faker.seed(parseInt(seed));
    res.send(
        {
            organisationName: faker.company.companyName(),
            organisationId: faker.datatype.number({
                'min': 100000000,
                'max': 999999999
            }),
            registratedDate: faker.date.past(),
            dueDate: faker.date.future(),
            consultantId: faker.datatype.number(),
            quantity: faker.datatype.number(),
            price: faker.datatype.number(),
        }
    );
});

app.get('/invoices', (req, res) => {
    const count = req.query.count;
    if (!count) {
        return res.status(400).send({
            errorMsg: 'count query parameter is missing.'
        });
    }

    res.send(
        _.times(count, () => {
            return {
                organisationName: faker.company.companyName(),
                organisationId: faker.datatype.number({
                    'min': 100000000,
                    'max': 999999999
                }),
                registratedDate: faker.date.past(),
                dueDate: faker.date.future(),
                consultantId: faker.datatype.number(),
                quantity: faker.datatype.number(),
                price: faker.datatype.number(),
            };
        })
    );
});

app.get('/users', (req, res) => {
    const count = req.query.count;
    if (!count) {
        return res.status(400).send({
            errorMsg: 'count query parameter is missing.'
        });
    }

    res.send(
        _.times(count, () => {
            const user = faker.name;
            return {
                firstName: user.firstName(),
                lastName: user.lastName(),
                jobTitle: user.jobTitle()
            };
        })
    );
});

app.get('/user', (req, res) => {
    const seed = req.query.seed;
    if (!seed) {
        return res.status(400).send({
            errorMsg: 'seed query parameter is missing.'
        });
    }
    faker.seed(parseInt(seed));
    const user = faker.name;
    res.send(
        {
            firstName: user.firstName(),
            lastName: user.lastName(),
            jobTitle: user.jobTitle()
        }
    );
});

app.get('/news', (req, res) => {
    const count = req.query.count;
    if (!count) {
        return res.status(400).send({
            errorMsg: 'count query parameter is missing.'
        });
    }

    res.send(
        _.times(count, () => {
            const lorem = faker.lorem;
            return {
                paragraph: lorem.paragraph(),
                sentence: lorem.sentence(),
                paragraphs: lorem.paragraphs()
            };
        })
    );
});


app.listen(3030, () => {
    console.log('server started on port 3030');
});
