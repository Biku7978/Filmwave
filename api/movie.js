export default async function handler(req, res) {

  const apiKey = process.env.OMDB_API_KEY;

  const search = req.query.s;
  const id = req.query.i;

  let url = "";

  if (search) {
    url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}`;
  } else if (id) {
    url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;
  } else {
    return res.status(400).json({ error: "Missing query" });
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
}
