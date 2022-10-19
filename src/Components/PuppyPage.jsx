import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Puppy.module.css";
const PuppyPage = () => {
  const params = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (params.e == "terrier") {
      setLoading(true);
      fetch(`https://dog.ceo/api/breed/terrier/images`)
        .then((res) => res.json())
        .then((res) => {
          setImages(res.message);
          setLoading(false);
        })
        .catch(() => setError(true));
    } else if (params.e == "spaniel") {
      setLoading(true);
      fetch(`https://dog.ceo/api/breed/spaniel/images`)
        .then((res) => res.json())
        .then((res) => {
          setImages(res.message);
          setLoading(false);
        })
        .catch(() => setError(true));
    }
  }, []);

  console.log(params);
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
      {" "}
      <div className={styles.image}>
        {" "}
        {images &&
          images.map((e, index) => (
            <div id={new Date()}>
              {" "}
              <img src={e} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PuppyPage;
