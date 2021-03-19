import React, { useState } from "react";
import Layout from "../components/layout";
import URLInput from "../components/url-input";
import ReqBodyInput from "../components/req-body-input";
import ResponseView from "../components/response-view";

const IndexPage = () => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [reqBody, setReqBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);

  const onHit = () => {
    setLoading(true);

    let options = {
      method,
    };
    if (method == "POST" || method == "PUT") options["body"] = reqBody;
    console.log(JSON.stringify(options));

    fetch(url, options)
      .then((res) => {
        setStatus(res.status);
        return res.text();
      })
      .then((res) => {
        if (res) setResponse(JSON.stringify(JSON.parse(res), null, 4));
        else setResponse("Empty response");
        setLoading(false);
      })
      .catch((err) => {
        setResponse(JSON.stringify(err, null, 4));
        setIsError(true);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <URLInput
        url={url}
        setUrl={setUrl}
        method={method}
        setMethod={(val) => {
          setMethod(val);
          setResponse("");
          setReqBody("");
        }}
        onHit={onHit}
        loading={loading}
      />
      {(method == "POST" || method == "PUT") && (
        <ReqBodyInput reqBody={reqBody} setReqBody={setReqBody} />
      )}
      <ResponseView res={response} status={status} isError={isError} />
    </Layout>
  );
};

export default IndexPage;
