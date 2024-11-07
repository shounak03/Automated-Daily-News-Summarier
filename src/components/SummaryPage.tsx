import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SummaryPage = () => {
  const location = useLocation();
  const { url } = location.state || {};

   const summarize = async () => {
        const res = await fetch(`localhost:3000/api/v1/summarize?url=${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                url: url
            })
        })
        const summary = await res.json()
        console.log(summary)
    }


  useEffect(() => {
    summarize()
  }, [url]);

  return (
    <div>
      <h1>Summary Page</h1>
      {url && <p>Summary for article <Link to={url}>"click"</Link></p>}
    </div>
  );
};

export default SummaryPage;
