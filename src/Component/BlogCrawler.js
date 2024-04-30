// src/components/BlogCrawler.js
import React, { useState } from "react";
import axios from "axios";

function BlogCrawler() {
  const [url, setUrl] = useState("");
  const [blogData, setBlogData] = useState(null);
  const apiUrl = process.env.REACT_APP_SERVER_URL + "/crawl";

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = () => {
    axios
      .get(apiUrl + encodeURIComponent(url))
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={handleUrlChange}
        placeholder="네이버 블로그 글 URL을 입력하세요"
      />
      <button onClick={fetchData}>불러오기</button>
      {blogData && (
        <div>
          <img src={blogData.image} alt="이미지" />
          <h2>{blogData.title}</h2>
          <p>{blogData.content}</p>
          <p>작성날짜: {blogData.date}</p>
          <p>작성자: {blogData.author}</p>
        </div>
      )}
    </div>
  );
}

export default BlogCrawler;
