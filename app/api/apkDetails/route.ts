import gplay from "google-play-scraper";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id') || ''
    const result = await gplay.app({appId: id})
    return Response.json({ result })
}