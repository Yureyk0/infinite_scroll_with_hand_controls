import { Oval } from "react-loader-spinner";
import "./loader.css";
import { Dispatch, RefObject, SetStateAction } from "react";

const Loader = ({
  refLoader,
}: {
  setPage: Dispatch<SetStateAction<number>>;
  refLoader: RefObject<HTMLDivElement>;
}) => {
  return (
    <div id="loader-photos" ref={refLoader}>
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

export default Loader;
