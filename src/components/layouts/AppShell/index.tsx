import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"]

const AppShell = (props: AppShellProps) => {
    const { children } = props
    const { pathname } = useRouter()
    return (
        <div>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </div>
    );
}

export default AppShell