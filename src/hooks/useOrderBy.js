import * as utils from "../utils/orderByUtils";

const useOrderBy = (groupedData, orderBy) => {
    if (groupedData) {
        switch (orderBy) {
            case "priority":
                return utils.orderByPriority(groupedData);
            case "title":
                return utils.orderByTitle(groupedData);
            default:
                return groupedData; // Return groupedData if orderBy is unrecognized
        }
    }
    return []; // Return an empty array if no groupedData
};

export default useOrderBy;
