import React from "react";
import Loadable from "react-loadable";
import { view as Loading } from '../commons/loading';

export default getComponent => {
  return Loadable.Map({
    loader: {
        page: () => getComponent(),
        delay: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        })
    },
    loading: Loading,
    render(loaded, props) {
        let Page = loaded.page.default;
        return <Page />;
    }
  });
};
