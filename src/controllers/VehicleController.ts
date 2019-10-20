import { Request, Response } from "express";
import Nhtsa from "../libraries/vehicles/Nhtsa";
import IVehicle from "../libraries/vehicles/IVehicle";

export default class VehicleController {
  private vehicle: IVehicle = new Nhtsa();

  public getVehiclesThroughGET = async (req: Request, res: Response) => {
    const {
      params: { modelYear, manufacturer, model },
      query: { withRating = false }
    } = req;
    const result = await this.vehicle.getVehicles(
      modelYear,
      manufacturer,
      model,
      !!withRating
    );
    res.send(result);
  };

  public getVehiclesThroughPOST = async (req: Request, res: Response) => {
    const {
      body: { modelYear, manufacturer, model },
      query: { withRating = false }
    } = req;
    const result = await this.vehicle.getVehicles(
      modelYear,
      manufacturer,
      model,
      !!withRating
    );
    res.send(result);
  };
}
