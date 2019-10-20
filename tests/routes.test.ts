import express from "express";
import axiosist from "axiosist";
import bodyParser from "body-parser";
import { setRoutes } from "../src/routes";

const app = express();
app.use(bodyParser.json());
setRoutes(app);

describe("NHTSA API routes test", () => {
  test("getVehicles GET request", async () => {
    const response = await axiosist(app).get("/vehicles/2015/Audi/A3");
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({ Count: 4 });
  });

  test("getVehicles POST request", async () => {
    const response = await axiosist(app).post("/vehicles", {
      model: "A3",
      manufacturer: "Audi",
      modelYear: "2015"
    });
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({ Count: 4 });
  });
});
