import fetch from 'node-fetch';

export default async (req, res) => {
  if (req.method === 'POST') {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzmxkd3upJskm-gUVD5CsbD4y9kavhf5_qt6KGn3ShvlyLST-NV66Y668IiEjkpMEk9JQ/exec';
    
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(req.body)
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
