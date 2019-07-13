import React, { useState } from "react";

function FakeFeatch() {
  const [isFetching, setFetch] = useState(false);

  const makeFakeFetchRequest = () => {
    setFetch(true);

    setTimeout(() => {
      setFetch(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={makeFakeFetchRequest}>Fake Fetch</button>
      <div>{isFetching && "Loading..."}</div>
    </div>
  );
}

export default FakeFeatch;
