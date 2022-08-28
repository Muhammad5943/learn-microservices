import express from 'express';

const app = express();
const PORT = 3000;

app.get('*', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Hello world'
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port http//localhost:${PORT}`);
});
