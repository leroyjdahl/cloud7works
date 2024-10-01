// src/index.ts in the backend
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.get('/api/endpoint', (req, res) => {
    res.json({ message: 'Hello from the backaasend!' });
});

app.get('/api/forms', (req, res) => {
    res.json({ data: forms });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export const forms = [
    {
        value: "dog",
        label: "Dog",
        address: "123 Dog St",
        altId: "DOG001",
        city: "Dogville",
        country: "US",
        dob: "2024-09-26",
        email: "max@dogmail.com",
        gender: "Male",
        givenName: "Max",
        lastName: "Barkington",
        state: "CA",
        street: "Woof Ave",
        telephone: "555-1234",
        uniqueId: "12345",
        zip: "90210"
    },
    {
        value: 'cat',
        label: 'Cat',
        uniqueId: '54321',
        altId: 'CAT002',
        givenName: 'Whiskers',
        lastName: 'Feline',
        gender: 'Female',
        dob: '2018-07-21',
        address: '456 Cat Blvd',
        street: 'Purr Lane',
        city: 'Cat City',
        state: 'NY',
        zip: '10001',
        country: 'US',
        telephone: '555-5678',
        email: 'whiskers@catmail.com',
    },
    {
        value: 'hamster',
        label: 'Hamster',
        uniqueId: '67890',
        altId: 'HAM003',
        givenName: 'Nibbles',
        lastName: 'Rodentia',
        gender: 'Male',
        dob: '2021-01-11',
        address: '789 Hamster Ct',
        street: 'Cheese St',
        city: 'Hamstertown',
        state: 'FL',
        zip: '33101',
        country: 'US',
        telephone: '555-4321',
        email: 'nibbles@hamstermail.com',
    },
];