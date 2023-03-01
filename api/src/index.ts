import express from "express"
import {router as apiV1} from "./v1";
import {router as healthChecks} from "./healthchecks";
import path from "path";
import cors from 'cors'

const port = Number(process.env.PORT) || 8080;
const app = express();
app.use(cors())
app.use("/api/v1", apiV1)
app.use("/health", healthChecks)
app.use("/", express.static(path.join(__dirname, "../../client/build")))


app.listen(port, () => console.log(`express is listening on port ${port}`))