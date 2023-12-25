import "@/styles/global.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "material-icons/iconfont/material-icons.css";
import FileTranslations from "@/components/FileTranslations";

const File = () => {
  return (
    <>
      <FileTranslations />
      <Tooltip id="tooltip" />
    </>
  );
};

export default File;
