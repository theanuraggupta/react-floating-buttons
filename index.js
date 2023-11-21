import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { FabComponent } from "@syncfusion/ej2-react-buttons";
import { GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject } from '@syncfusion/ej2-react-grids';


const Overview = () => {
    const grid = useRef(null);
    const editOptions = { allowAdding: true, mode: 'Dialog' };
    const orders = () => {
        const orders = [];
        for (let i = 1; i < 10; i++) {
            orders.push({
                "OrderID": 10589 + i,
                "CustomerID": ["VINET", "TOMSP", "SUPRD", "CHOPS", "RICSU"][Math.floor(Math.random() * 5)],
                "Freight": (10.35 * i).toFixed(2),
                "ShippingCountry": ["France", "Brazil", "Switzerland", "Germany"][Math.floor(Math.random() * 4)]
            });
        }
        return orders;
    };
    const handleClick = () => {
        grid.current.addRecord();
    };
    return (<div className="control-pane">
        <div className="control-section">
            <div className="fab-grid-container custom-index">
                {/* Grid component rendered to add it as target for FAB. */}
                <GridComponent id="Grid" className="fabgrid" dataSource={orders()} editSettings={editOptions} ref={grid}>
                    <Inject services={[Edit]}/>
                </GridComponent>
                <FabComponent id="fab" title="Add Record" iconCss="fab-icons fab-icon-add" target="#Grid" onClick={handleClick}/>
            </div>
        </div>
    </div>);
};
export default Overview;

const root = createRoot(document.getElementById('sample'));
root.render(<Overview />);