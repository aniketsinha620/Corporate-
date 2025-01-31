import React from 'react';

const vehicleCard = ({ image, title, startProduction, sendSource, sendDestination, carNumber }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-gray-400">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    Production Year: {startProduction}
                </p>
                <p className="text-gray-700 text-base">
                    Source: {sendSource}
                </p>
                <p className="text-gray-700 text-base">
                    Destination: {sendDestination}
                </p>
                <p className="text-gray-700 text-base">
                    Car Number: {carNumber}
                </p>
            </div>
        </div>
    );
};

export default vehicleCard;
