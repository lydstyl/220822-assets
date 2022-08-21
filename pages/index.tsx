import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const Login: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Assets Login</title>
                <meta
                    name="description"
                    content="Login to manage your assets"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to assets</h1>
                <p>Login here</p>
            </main>
        </div>
    )
}

export default Login
