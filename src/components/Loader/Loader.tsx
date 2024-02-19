import { Oval } from "react-loader-spinner";
import "./loader.css";
import { Dispatch, SetStateAction, useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const Loader = ({
  setIsVisible,
}: {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  setIsVisible(isVisible);

  return (
    <div id="loader-photos" ref={ref}>
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
