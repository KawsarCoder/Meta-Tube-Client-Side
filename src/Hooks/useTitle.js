import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Meta Tube`;
  }, [title]);
};
export default useTitle;
