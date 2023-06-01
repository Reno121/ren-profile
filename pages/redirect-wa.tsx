import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  const redirectUrl = 'https://wa.me/6285811741360'; // ganti dengan URL halaman tujuan di situs lain
  res.writeHead(302, { Location: redirectUrl });
  res.end();
};

export default handler;
