import gplay from "google-play-scraper";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('query') || ''
    const result = await gplay.search({term: id})
    return Response.json({ result })
}