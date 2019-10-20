**Installation instructions**
Run the following commands:
1) git clone `https://github.com/allroundexperts/nhtsa-node.git`
2) npm install
3) npm start

**Testing**

Run the following command:
`npm test`

**Endpoints**

1) GET /vehicles/:modelYear/:manufacturer/:model

Optional Query params: withRating: Boolean

Response: 

{
    Count: number,
    Results: Array<{ Description: string, VehicleId: string, CrashRating?: string}>
}

2) POST /vehicles

Body: { modelYear: string, manufacturer: string, model: string }

Optional Query params: withRating: Boolean

Response: 

{
    Count: number,
    Results: Array<{ Description: string, VehicleId: string, CrashRating?: string}>
}