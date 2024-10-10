import { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import classes from "./Ticket.module.css";
import User from "../UI/User";
import Icon from "../UI/Icon";
import images from "../../utils/imageUtils";
import { BsFillCircleFill } from "react-icons/bs";

const Ticket = ({ ticket }) => {
    const { groupBy } = useContext(DisplayContext);

    return (
        <div className={classes.ticket}>
            <div className={classes["ticket__id-and-user"]}>
                <div className={classes.ticket__id}>{ticket.id}</div>
                {groupBy !== "userId" && (
                    <User
                        src={images[ticket.userName]}
                        alt={ticket.userName}
                        isUserAvailable={ticket.isUserAvailable}
                    />
                )}
            </div>
            <div className={classes["ticket__status-and-title"]}>
                {groupBy !== "status" && (
                    <Icon groupBy="status" query={ticket.status} />
                )}
                <div className={classes.ticket__title}>{ticket.title}</div>
            </div>
            <div className={classes["ticket__priority-and-tag"]}>
                {groupBy !== "priority" && (
                    <Icon groupBy="priority" query={ticket.priorityLabel} />
                )}
                {ticket.tag.map((tag) => (
                    <div key={tag} className={classes.ticket__tag}>
                        <BsFillCircleFill className={classes.ticket__bullet} />
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticket;