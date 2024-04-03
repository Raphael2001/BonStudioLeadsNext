import ServerApiManager from "api/ServerApiManager";
import { serverProps } from "utils/types/api";

const ApiServer = (function () {
  function init(props: serverProps) {
    ServerApiManager.execute(props, "init");
  }

  return { init };
})();

export default ApiServer;
