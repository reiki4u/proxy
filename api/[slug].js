export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Extraer solo la parte después de "/anime/"
  const anime = path.startsWith("/anime/") ? path.replace("/anime/", "") : "";

  const apiUrl = `https://erosubs.totalh.net/anime/${anime}`;

  const response = await fetch(apiUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    }
  });

  const text = await response.text();

  return new Response(text, {
    headers: {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
