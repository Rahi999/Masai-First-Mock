import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  // https://dog.ceo/api/breads/list/all

  const [d, setD] = useState([]);
  const [a, setA] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((res) => {
        setData(res.message.terrier);
        setD(res.message.spaniel);
        setA(res.message.australian);
        setLoading(false);
      });
  }, []);
  return loading ? (
    <div>
      {" "}
      <img
        width="15%"
        style={{ marginLeft: "30%", marginTop: "200px" }}
        src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif"
      />
    </div>
  ) : error ? (
    <div>
      {" "}
      <img
        width="30%"
        style={{ marginLeft: "30%", borderRadius: "8px" }}
        src="https://yacht-express.net/wp-content/uploads/2020/12/it-seems-that-something-went-wrong-1-718x602.gif"
      />
    </div>
  ) : (
    <>
      <div marginTop="120px">
        {a &&
          a.map((e) => (
            <div key={new Date()} className={styles.div2}>
              <Link to={`/puppy/spaniel`}>{e}</Link>
            </div>
          ))}
        {d &&
          d.map((e) => (
            <div key={new Date()} className={styles.div2}>
              <Link to={`/puppy/spaniel`}>{e}</Link>
            </div>
          ))}

        {data &&
          data.map((e) => (
            <div key={new Date()} className={styles.div2}>
              <Link to={`/puppy/terrier`}>{e}</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
