export default interface IVehicle {
  getVehicles(
    modelYear: string,
    manufacturer: string,
    model: string,
    crashRatings?: boolean
  ): Promise<Data>;
  getCrashRatings(vehicleId: string): Promise<Record<"CrashRating", string>>;
}

export type Result = {
  Description: string;
  VehicleId: string;
  CrashRating?: string;
};

type Data = {
  Count: number;
  Results: Array<Result>;
};
