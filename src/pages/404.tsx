import styles from "@/styles/404.module.scss"

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img src="/404.png" alt="404" className="w-1/2"/>
            <h1 className="text-3xl">Halaman Tidak Ditemukan</h1>
        </div>
    )
}

export default Custom404