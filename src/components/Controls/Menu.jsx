import { forwardRef, useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import classes from "./Menu.module.css";

const Menu = forwardRef((props, ref) => {
    const { groupBy, orderBy, handleGroupingChange, handleOrderingChange } = useContext(DisplayContext);

    return (
        <div className={classes.menu} ref={ref}>
            <div>
                <label htmlFor="grouping">Grouping</label>
                <select
                    id="grouping"
                    value={groupBy}
                    onChange={(e) => handleGroupingChange(e.target.value)}
                >
                    <option value="status">Status</option>
                    <option value="userId">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div>
                <label htmlFor="ordering">Ordering</label>
                <select
                    id="ordering"
                    value={orderBy}
                    onChange={(e) => handleOrderingChange(e.target.value)}
                >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    );
});

export default Menu;
