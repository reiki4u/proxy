export default async function handler(req, res) {
  const { slug } = req.query;
  const url = `https://erosubs.totalh.net/anime/${slug}`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Error al obtener el contenido.");
  }
}
