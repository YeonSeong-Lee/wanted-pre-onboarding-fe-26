import React, { useState, useEffect, useRef } from 'react';
import MockComponent from './MockComponent.tsx';
import { MockDataInterface, getMockData } from './getMockData.ts';

const MockComponentContainer: React.FC = () => {
    const [data, setData] = useState<MockDataInterface[]>([]);
    const [page, setPage] = useState(1);
    const endFlag = useRef(false);

    useEffect(() => {
        const fetchData = async() => {
            if (endFlag.current === true) {
                alert('No more data to load');
                return;
            }
            const { datas, isEnd } = await getMockData(page);
            endFlag.current = isEnd;
            setData(prevData => [...prevData, ...datas]);
        };

        fetchData();
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="mock-component-container">
            {data.map((item, index) => (
                <MockComponent key={index} data={item} index={index} />
            ))}
        </div>
    );
};

export default MockComponentContainer;