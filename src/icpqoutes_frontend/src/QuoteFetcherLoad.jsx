import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoad() {
    const [quote, setQuote] = useState({ text: '', author: ''})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randomQuote = jsonResponse.quote;
            setQuote(randomQuote);
            setIsLoading(false);
        }
        fetchQuote();
    }, []);

    return (
        <>
            <div>
                <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>
                    Loading...
                </p>
                <h1 className='quote'>{quote.text}</h1>
                <h3 className='author'>{quote.author}</h3>
            </div>
        </>
    )
};