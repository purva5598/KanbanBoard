import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import classes from "./Group.module.css";
import Icon from "../UI/Icon";
import User from "../UI/User";
import images from "../../utils/imageUtils";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Ticket from "./Ticket";

const Group = ({ title, data }) => {
    const { groupBy } = useContext(DisplayContext);

    return (
        <div className={classes.group}>
            <div className={classes.group__header}>
                <div className={classes.group__information}>
                    {groupBy === "status" && <Icon groupBy={groupBy} query={title} />}
                    {groupBy === "userId" && (
                        <User
                            src={images[title]}
                            alt={title}
                            isUserAvailable={data.isUserAvailable}
                        />
                    )}
                    {groupBy === "priority" && <Icon groupBy={groupBy} query={title} />}
                    <div className={classes.group__title}>{title}</div>
                    <div className={classes.group__count}>{data.tickets.length}</div>
                </div>
                <div className={classes.group__actions}>
                    <AiOutlinePlus />
                    <BsThreeDots />
                </div>
            </div>
            <div className={classes.group__tickets}>
                {data.tickets.map((ticket) => (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default Group;