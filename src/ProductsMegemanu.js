import React from 'react';
import { NavData } from './components/NavData';

const ProductsMegemanu = () => {
    return (
        <div className="nav-megemanu">
            {NavData.map((item, index) => (
                <div key={index} className="nav-megemanu-item">
                    <div className="nav-megemanu-icon">{item.icon}</div>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsMegemanu;
