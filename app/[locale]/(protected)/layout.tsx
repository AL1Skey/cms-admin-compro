import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import DashCodeSidebar from '@/components/partials/sidebar'
import DashCodeFooter from '@/components/partials/footer'
import ThemeCustomize from '@/components/partials/customizer'
import DashCodeHeader from '@/components/partials/header'
import { auth } from "@/lib/auth";
import { redirect } from "@/components/navigation";
import { getCookie } from "typescript-cookie";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
const layout = async ({ children }: { children: React.ReactNode }) => {

    // const session = await auth();
    // console.log(session);
    // if (!session) {
    //     redirect("/");
    // }
    // Classic version
    const token = await cookies().get('Authorization')?.value;
    // throw new Error(token+"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    if(!token) {
        redirect("/");
    }
    if(token && !verifyToken(token?.split(' ')[1])) {
        redirect("/");
    }
    return (
        <LayoutProvider >
            <ThemeCustomize />
            <DashCodeHeader />
            <DashCodeSidebar />
            <LayoutContentProvider>
                {children}
            </LayoutContentProvider>
            <DashCodeFooter />
        </LayoutProvider>
    )


};

export default layout;
