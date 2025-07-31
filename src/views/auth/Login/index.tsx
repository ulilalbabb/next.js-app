import { useRouter } from "next/router"
import Link from "next/link";
import styles from "./Login.module.scss"

const LoginViews = () => {
    const { push } = useRouter()

    const handleLogin = () => {
        push("/product")
    }
    return (
        <div className={styles.login}>
            <h1 className="text-3xl">Login Page</h1>
            <button onClick={() =>handleLogin()}>
                login
            </button>
            <p>Belum Punya akun? registrasi <Link href="/auth/register">disini</Link></p>
        </div>
    )
}

export default LoginViews