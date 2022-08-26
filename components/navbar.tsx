import Link from "next/link"

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/assets">
                    <a>assets</a>
                </Link>
            </li>
            <li>
                <Link href="/categories">
                    <a>categories</a>
                </Link>
            </li>
            <li>
                <Link href="/accounts">
                    <a>accounts</a>
                </Link>
            </li>
        </ul>
    )
}
