import LayoutProvider from "@/providers/layout.provider";
import LayoutContentProvider from "@/providers/content.provider";
import DashCodeSidebar from '@/components/partials/sidebar'
import DashCodeFooter from '@/components/partials/footer'
import ThemeCustomize from '@/components/partials/customizer'
import DashCodeHeader from '@/components/partials/header'
import { auth } from "@/lib/auth";
import { getCookie } from "typescript-cookie";
import { cookies, headers } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { redirect } from "next/navigation";
const layout = async ({ children }: { children: React.ReactNode }) => {

    // const session = await auth();
    // console.log(session);
    // if (!session) {
    //     redirect("/");
    // }
    // Classic version
    const headersList = headers()
    const token = headersList.get('x-auth-token')
    
    // throw new Error(token+"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    if(!token) {
        redirect("/");
    }
    if(token) {
        try{
       const verified:any = verifyToken(token.split(' ')[1]);
         if(!verified.id) {
           
            redirect("/");
         }}
         catch(e) {
           
            redirect("/");
         }
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
