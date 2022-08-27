export default async function deleteService(url: string, id: string) {
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    })
    const json = await res.json()

    return json
}
