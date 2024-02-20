import { Oval } from "react-loader-spinner";
import "./loader.css";

export const Loader = () => {
  return (
    <div id="loader-photos">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="blue"
        secondaryColor="blue"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass="wrapperClass"
      />
    </div>
  );
};
