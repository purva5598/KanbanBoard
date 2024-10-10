import { createContext, useState } from "react";

export const DisplayContext = createContext();

export const DisplayProvider = (props) => {
    const [groupBy, setGroupBy] = useState(
        localStorage.getItem("groupBy") || "status"
    );

    const [orderBy, setOrderBy] = useState(
        localStorage.getItem("orderBy") || "priority"
    );

    const handleGroupingChange = (newGroupBy) => {
        setGroupBy(newGroupBy);
        localStorage.setItem("groupBy", newGroupBy);
    };

    const handleOrderingChange = (newOrderBy) => {
        setOrderBy(newOrderBy);
        localStorage.setItem("orderBy", newOrderBy);
    };

    const displayContext = {
        groupBy,
        orderBy,
        handleGroupingChange,
        handleOrderingChange,
    };

    return (
        <DisplayContext.Provider value={displayContext}>
            {props.children}
        </DisplayContext.Provider>
    );
};
