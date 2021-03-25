import React, { useState } from "react";
import Layout from "../components/layout";
import URLInput from "../components/url-input";
import ReqBodyInput from "../components/req-body-input";
import ResponseView from "../components/response-view";
import { Provider } from "../contexts/postman-context";

const IndexPage = () => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [reqBody, setReqBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  const [history, setHistory] = useState([]);

  const onHit = () => {
    setLoading(true);

    let options = {
      method,
    };
    if (method == "POST" || method == "PUT") options["body"] = reqBody;

    fetch(url, options)
      .then((res) => {
        setStatus(res.status);
        return res.text();
      })
      .then((res) => {
        if (res) setResponse(JSON.stringify(JSON.parse(res), null, 4));
        else setResponse("Empty response");
        setLoading(false);
        setHistory([...history, { method, url, reqBody }]);
      })
      .catch((err) => {
        setResponse(JSON.stringify(err, null, 4));
        setIsError(true);
        setLoading(false);
        setHistory([...history, { method, url, reqBody }]);
      });
  };

  const setHistoryItem = (item) => {
    setMethod(item.method);
    setUrl(item.url);
    setReqBody(item.reqBody);
    setResponse("");
    setStatus("");
  };

  const changeMethod = (val) => {
    setMethod(val);
    setResponse("");
    setReqBody("");
  };

  return (
    <Provider
      value={{
        history,
        setHistoryItem,
        url,
        setUrl,
        method,
        changeMethod,
        reqBody,
        setReqBody,
        response,
        status,
        isError,
        onHit,
        loading,
      }}
    >
      <Layout>
        <URLInput />
        {(method == "POST" || method == "PUT") && <ReqBodyInput />}
        <ResponseView />
      </Layout>
    </Provider>
  );
};

export default IndexPage;
