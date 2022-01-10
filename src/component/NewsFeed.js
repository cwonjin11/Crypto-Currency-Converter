import {useEffect, useState} from 'react'
import axios from 'axios'

 const NewsFeeds = () => {
    const [articles, setArticles] = useState(null)

 
      useEffect(() => {

        const options = {
          method: 'GET',
          // url: 'https://crypto-news-live.p.rapidapi.com/news',
          url: 'https://cryptocurrency-news-live.p.rapidapi.com/crypto-news/bbc',
          headers: {
            'x-rapidapi-host': 'cryptocurrency-news-live.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
          }
        }
        
        axios.request(options).then((response) => {
          // console.log(response.data);
          setArticles(response.data)
        }).catch((error) => {
          // console.error(error)
        })

      },[])
      // console.log(articles)
      

     const first7Articles = articles?.slice(0, 5)

    return (
      <div className="news-feed">

        <h2 id="feed-header">News Feed</h2>
        <div className="news-feed-wrapper">
          {first7Articles?.map((article, _index) => (
            <div key={_index}>
            <a href={article.url}><p><li>{article.title}</li></p></a> 
            </div>))}
        </div>
      </div>
    );
  }
  
  export default NewsFeeds;
  