import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./app/router/router";
// import globalErrorHandler from "./app/middleWare/globalErrorHandler";
// import notFound from "./app/middleWare/notFound";
// 
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://tutor-link-frontend-nine.vercel.app",
    ],
    credentials: true,
  })
);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World Hasan Mahadi");
});
// const test = async (req: Request, res: Response) => {
//   Promise.reject()
// };

// app.get('/', test);

// app.use(globalErrorHandler);
// app.use(notFound);

export default app;
