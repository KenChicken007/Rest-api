import { useEffect } from "react";

const Stories = () => {
  let isLoading = true;
  let API = "http://hn.algolia.com/api/v1/search?query=html";

  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      isLoading = false;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <h2>My Tech News Post</h2>
    </>
  );
};

export default Stories;
