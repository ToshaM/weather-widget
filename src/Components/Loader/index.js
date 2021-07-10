import React from "react";
import {Bars, useLoading} from '@agney/react-loading';

function Loader() {
  const {containerProps, indicatorEl} = useLoading({
    loading: true,
    indicator: <Bars width="100"/>,
  });

  return (

    <section {...containerProps}>
      {indicatorEl}
    </section>
  )
}

export default Loader;