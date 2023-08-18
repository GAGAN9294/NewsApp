import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spin from "./Spin";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);
 

  const updateNews = async () => {
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=40519c6ca6114dd8a2d13f4105ef2aac&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setprogress(30);
    let passedData = await data.json();
    props.setprogress(70);
    setArticles(passedData.articles);
    setTotalResult(passedData.totalResults);
    setLoading(false);

    props.setprogress(100);
  };

  useEffect(() => {
     document.title = `${props.category} - NewsMonkey `;
    updateNews();
  }, []);



  const fetchMoreData = async () => {
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=40519c6ca6114dd8a2d13f4105ef2aac&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1 );
    let data = await fetch(url);
    let passedData = await data.json();

    setArticles(articles.concat(passedData.articles));
    setTotalResult(passedData.totalResults);
    setLoading(false);
  };

  return (
    <div>
      <div className="container my-4">
        <h2 className="text-center " style={{marginTop : '90px' }}>
         
          NewsMonkey - Top {props.category} Headlines
        </h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spin />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col my-3" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      
      {loading && <Spin />}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
