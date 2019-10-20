import { Application, Request, Response, NextFunction } from "express";
import VehicleController from "./controllers/VehicleController";

const vehicle = new VehicleController();

const wrapAsync = (fn: Function) => {
  return function(req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch(next);
  };
};

export const setRoutes = (app: Application) => {
  app.post("/vehicles", wrapAsync(vehicle.getVehiclesThroughPOST));
  app.get(
    "/vehicles/:modelYear/:manufacturer/:model",
    wrapAsync(vehicle.getVehiclesThroughGET)
  );
};
