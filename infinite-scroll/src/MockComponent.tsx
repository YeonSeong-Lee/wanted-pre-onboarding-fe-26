import React from 'react';
import './MockComponent.css';

interface MockData {
    productId: string;
    productName: string;
    price: number;
    boughtDate: string;
}

 

const MockComponent: React.FC<{ data: MockData }> = ({ data }) => {
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