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

                <section>
                    <h2>Add one asset with form here</h2>
                </section>

                <section>
                    <h2>Add multiple with CSV</h2>
                    <select name="action" id="action">
                        <option value="replace">replace</option>
                        <option value="add">add</option>
                    </select>
                    <textarea cols="80" rows="10"></textarea>
                </section>

                <section>
                    <h2>Show all assets in CSV</h2>
                </section>
            </main>
        </div>
    )
}

export default Assets
