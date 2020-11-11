export default async (req, res) => {
  const {
    query,
  } = req;

  const response = await fetch(`https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${query.postId}/&fields=thumbnail_url&access_token=${process.env.INSTAGRAM_APP_ID}|${process.env.INSTAGRAM_CLIENT_TOKEN}`);

  res.statusCode = 200;
  res.json(response.body);
}
