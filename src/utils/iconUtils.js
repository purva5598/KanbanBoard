import { TbCircleDotted, TbAlertSquareFilled } from "react-icons/tb";
import { BiCircle, BiAdjust } from "react-icons/bi";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { AiOutlineDash } from "react-icons/ai";
import {
    PiCellSignalHighFill,
    PiCellSignalMediumFill,
    PiCellSignalLowFill,
} from "react-icons/pi";

export const statusIcons = {
    Backlog: <TbCircleDotted style={{ color: "dimgray" }} />,
    Todo: <BiCircle style={{ color: "gainsboro" }} />,
    "In progress": <BiAdjust style={{ color: "#F1C849" }} />,
    Done: <MdCheckCircle style={{ color: "#5C6AD0" }} />,
    Canceled: <MdCancel style={{ color: "#A8A8A8" }} />,
};

export const priorityIcons = {
    "No priority": <AiOutlineDash style={{ color: "dimgray" }} />,
    Urgent: <TbAlertSquareFilled style={{ color: "#FA773E" }} />,
    High: <PiCellSignalHighFill style={{ color: "gray" }} />,
    Medium: <PiCellSignalMediumFill style={{ color: "gray" }} />,
    Low: <PiCellSignalLowFill style={{ color: "gray" }} />,
};
