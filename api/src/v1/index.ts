import {Router} from "express";

export const router = Router()
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function randomColor() {
    return "#" + getRandomInt(256).toString(16) +
        getRandomInt(256).toString(16) +
        getRandomInt(256).toString(16)
}
router.get("/color", (req, res) => {
    const obj = {color: process.env.MY_COLOR || randomColor()}
    res.status(200).json(obj)
})