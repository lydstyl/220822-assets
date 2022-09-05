export default async function readService(url: string) {
    const res = await fetch(url)
    const json = await res.json()
    return json
}
