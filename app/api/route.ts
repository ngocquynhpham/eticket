
export async function GET(request: Request) {
   return Response.json({ hello: "helo" });
}

export async function POST(request:Request) {
    const data = await request.json();
    console.log("data",data);
    return Response.json(data);
}