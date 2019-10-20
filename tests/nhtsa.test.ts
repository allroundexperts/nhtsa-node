import Nhtsa from "../src/libraries/vehicles/Nhtsa";

describe("Method testing of Vehicle interface implementation", () => {
  const vehicle = new Nhtsa();
  test("getVehicles method", async () => {
    const { Count } = await vehicle.getVehicles("2015", "Audi", "A3");
    expect(Count).toBe(4);
  });

  test("getVehicles error", async () => {
    const { Count } = await vehicle.getVehicles("2015", "Audi", "A23");
    expect(Count).toBe(0);
  });

  test("getCrashRatings method", async () => {
    const { CrashRating } = await vehicle.getCrashRatings("9403");
    expect(CrashRating).not.toBe(false);
  });

  test("getCrashRatings error", () => {
    expect(vehicle.getCrashRatings("11112223221222")).rejects.toThrowError();
  });
});
