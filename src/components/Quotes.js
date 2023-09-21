import './Quotes.css';
import { useState, useEffect } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
const apiKey = 'RCx4GyRkAnqwLwS2DBq/cg==6hZ3KyhXY6HyLkdm';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setQuotes(data[0]);
      setIsLoading(false);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const message = isError ? 'There must be some error' : 'Loading...';
  if (isLoading || isError) {
    return <p className="message">{message}</p>;
  }
  return (
    <div className="quote-container">
      <h2 className="quote-title">Quote of the moment!</h2>
      <blockquote className="quote">
        <q className="qtag">{quotes.quote}</q>
        <cite className="author">
          ---
          {quotes.author}
        </cite>
      </blockquote>
    </div>
  );
};

export default Quotes;
