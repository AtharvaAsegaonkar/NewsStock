import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props) =>{
  const[articles,setarticles]=useState([]);
  const[loading ,setloading]=useState(true);
  const[page,setpage]=useState(1);
  const[totalResults,settotalResults]=useState(0);
  // document.title=`${props.category} - NewsStock`; 

  
  
  
  
  
        const  updatenews =async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc6b664202ea49cc9bd7ee949f3c8fa8&page=${page}&pagesize=${props.pageSize}`;
        //setState({loading: true});
        let data = await fetch (url);
        let parseddata= await data.json();
        setarticles(parseddata.articles);
        settotalResults(parseddata.totalResults);
        setloading(parseddata.false);
      }
  
      useEffect(()=>{

        updatenews();
      // eslint-disable-next-line
      } ,[])
        

      
          const fetchMoreData = async() => {
          // setState({page:page+1})
          const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bc6b664202ea49cc9bd7ee949f3c8fa8&page=${page+1}&pagesize=${props.pageSize}`;
          setpage(page+1);
          let data = await fetch (url);
          let parseddata= await data.json();
          setarticles (articles.concat( parseddata.articles))
          settotalResults(parseddata.totalResults);
        
          };
            
      
  
    return (
        <>
          
            
            <h2 className='text-center' style={{margin: "30px 0px", marginTop:"90px"}}>NewsStock -TopHeadline</h2><br />
            {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}>

            <div className="container">

                  <div className="row">
                  
                  { articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                      <NewsItem  title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
                       </div>
              })}
            </div>
          </div>

            </InfiniteScroll>

          </>
              
          
            
    );
  
            }


News.defaultProps = {
  country:"in",
  pageSize: 70,
  category:"business",
}
News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}       

export default News
