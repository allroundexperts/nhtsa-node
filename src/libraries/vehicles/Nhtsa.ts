import axios from "axios";
import IVehicle, { Result } from "./IVehicle";

export default class NHTSA implements IVehicle {
  public async getVehicles(
    modelYear: string,
    manufacturer: string,
    model: string,
    crashRatings?: boolean
  ) {
    let results = [];
    const { data, status } = await axios.get(
      `https://one.nhtsa.gov/webapi/api/SafetyRatings/modelyear/${modelYear}/make/${manufacturer}/model/${model}?format=json`
    );
    if (status !== 200) throw new Error("GetVehicle request failed.");
    if (data.Count > 0) {
      results = data.Results.map(async (result: Partial<Result>) => {
        let rating = {};
        if (crashRatings) rating = await this.getCrashRatings(result.VehicleId);
        return {
          ...result,
          ...rating
        };
      });
    }
    return { Count: data.Count, Results: await Promise.all(results) };
  }

  public async getCrashRatings(
    vehicleId: string
  ): Promise<Record<"CrashRating", string>> {
    const { data, status } = await axios.get(
      `https://one.nhtsa.gov/webapi/api/SafetyRatings/VehicleId/${vehicleId}?format=json`
    );
    if (status !== 200) throw new Error("CrashRatings request failed.");
    return { CrashRating: data.Results[0].OverallRating };
  }
}
