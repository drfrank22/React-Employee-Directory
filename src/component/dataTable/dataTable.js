import "./dataTable.css";
import DataBody from "../dataBody/dataBody";
import DataAreaContext from "../../util/DataAreaContext";
import { useContext } from "react";

const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
            <thead>
            <tr>
                {context.developerState.headings.map(({ name, width }) => {
                return (
                    <th
                    className="col"
                    key={name}
                    style={{ width }}
                    onClick={() => {
                        context.handleSort(name);
                    }}
                    >
                    {name}
                    <span className="pointer"></span>
                    </th>
                );
                })}
            </tr>
            </thead>
                <DataBody />
            </table>
        </div>
    );
};

export default DataTable;