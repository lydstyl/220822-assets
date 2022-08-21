import type { NextPage } from "next"
import Head from "next/head"

const Assets: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Assets</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Assets</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </main>
        </div>
    )
}

export default Assets
