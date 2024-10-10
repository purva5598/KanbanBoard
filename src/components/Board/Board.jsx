import { useContext, useEffect, useState } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import useGroupBy from "../../hooks/useGroupBy";
import useOrderBy from "../../hooks/useOrderBy";
import classes from "./Board.module.css";
import Group from "./Group";

const Board = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawData, setRawData] = useState(null);
    const [error, setError] = useState(null);
    const { groupBy, orderBy } = useContext(DisplayContext);

    const fetchRawData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://api.quicksell.co/v1/internal/frontend-assignment"
            );
            const data = await response.json();
            setRawData(data);
        } catch {
            setError("Unable to load data. Please check your internet connection or try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRawData();
    }, []);

    const groupedData = useGroupBy(rawData, groupBy);
    const groupedAndOrderedData = useOrderBy(groupedData, orderBy);

    return (
        <div className={classes.board}>
            {isLoading && <p>Loading...</p>}
            {rawData &&
                Object.keys(groupedAndOrderedData).map((groupKey) => (
                    <Group key={groupKey} title={groupKey} data={groupedAndOrderedData[groupKey]} />
                ))}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Board;