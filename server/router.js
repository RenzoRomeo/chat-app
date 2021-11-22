import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Server is working");
});

export default router;