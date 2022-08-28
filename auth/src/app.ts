import express from "express";

const app = express();

app.get("*", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Hello world"
    });
});

export default app