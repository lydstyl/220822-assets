export default async function createService<Type>(url: string, jsBody: Type) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsBody),
    })
    const json = await res.json()
    return json
}
