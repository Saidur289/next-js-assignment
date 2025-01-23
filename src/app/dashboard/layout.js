import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({children}){
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user){
        return redirect(`/api/auth/login?redirect_url=${process.env.KINDE_POST_LOGIN_REDIRECT_URL}`);
    }
    return <div>{children}</div>
}