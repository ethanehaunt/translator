import "@/styles/global.css";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import 'material-icons/iconfont/material-icons.css';
import BasicTranslations from "@/components/BasicTranslations";

const Basic = () => {

    return (
        <>
            <BasicTranslations />
            <Tooltip id="tooltip" multiline />
        </>
    );
};

export default Basic;
