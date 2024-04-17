import prisma from "@/lib/db";
import { User } from "@prisma/client";

export async function POST(request: Request) {
    let data = await request.json();
    let type = data.type;
    let userData = data.data;
    if (type === "user.created") {
        let fullname: string;
        if (userData.first_name === "" && userData.last_name === "") {
            fullname = "Anonymous"
        }
        else if (userData.last_name !== "" && userData.first_name !== "") {
            fullname = userData.last_name + " " + userData.first_name;
        }
        else {
            fullname = userData.last_name || userData.first_name || "Anonymous";
        }
        let userObj = {
            name: fullname,
            externalId: userData.id,
            isActive: true,
        }
        const user = await prisma.user.create({
            data: userObj,
        });
    }
    return Response.json("Đăng ký thành công")
}