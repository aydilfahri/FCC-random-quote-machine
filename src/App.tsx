import { useState } from 'react'
import quotes from './assets/quotes.json'
import { FaQuoteLeft, FaQuoteRight, FaTwitter, FaTumblr } from 'react-icons/fa'
import './App.css'

interface Quote {
  quote: string;
  author: string;
}
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`
};



function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
  <div className="background" style={{ backgroundColor: randomColor }}>
    <div id="quote-box">
      <div className="quote-content">
        <h2 id="text" style={{color: randomColor}}>
          <FaQuoteLeft size="28" style={{ marginRight: "10px"}} />
          {quote.quote}
          <FaQuoteRight size="28" style={{ marginLeft: "10px"}} />
          </h2>
        <h4 id="author" style={{ color: randomColor }}>- {quote.author}</h4>
      </div>
      <div className="buttons">
        <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Life%20is%2010%25%20what%20happens%20to%20me%20and%2090%25%20of%20how%20I%20react%20to%20it.%22%20Charles%20Swindoll"
        className='button'
        id="tweet-quote" 
        style={{
          backgroundColor: randomColor,
          marginRight: "10px",
        }}
        >
          <FaTwitter color="white"/>
        </a>
        <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Charles%20Swindoll&content=Life%20is%2010%25%20what%20happens%20to%20me%20and%2090%25%20of%20how%20I%20react%20to%20it.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        className='button'
        id="tumblr-quote" 
        style={{
          backgroundColor: randomColor,
          marginRight: "10px",
        }}
        >
          <FaTumblr color="white"/>
        </a>
        <button className='button' id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor}}>New Quote</button>
      </div>
    </div>
  </div>
  )
}

export default App

