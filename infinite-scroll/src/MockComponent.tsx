import React from 'react';
import './MockComponent.css';
import { MockDataInterface } from './getMockData';
 

const MockComponent: React.FC<{ data: MockDataInterface }> = ({ data }) => {
    return (
        <div className="mock-component">
            <h2 className="product-name">{data.productName}</h2>
            <p className="product-id">Product ID: {data.productId}</p>
            <p className="price">Price: ${data.price}</p>
            <p className="bought-date">Bought Date: {data.boughtDate}</p>
        </div>
    );
};

export default MockComponent;