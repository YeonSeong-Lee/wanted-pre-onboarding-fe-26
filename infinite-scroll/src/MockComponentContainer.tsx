import React, { useState, useEffect, useRef, useCallback } from 'react';
import MockComponent from './MockComponent.tsx';
import { MockDataInterface, getMockData } from './getMockData.ts';

const MockComponentContainer: React.FC = () => {
    const [data, setData] = useState<MockDataInterface[]>([]);
    const [page, setPage] = useState(1);
    const [totalSum, setTotalSum] = useState(0);
    const endFlag = useRef(false);
    const [isLoading, setIsLoading] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useRef<HTMLDivElement | null>(null);

    const fetchData = async() => {
        if (endFlag.current === true) {
            alert('No more data to load');
            return;
        }
        setIsLoading(true);
        const { datas, isEnd } = await getMockData(1);
        setTotalSum(prevTotalSum => {
            return prevTotalSum + datas.reduce((acc, curr) => acc + curr.price, 0);
        });
        console.log('totalSum', totalSum);
        endFlag.current = isEnd;
        setData(prevData => [...prevData, ...datas]);
        setPage(prevPage => prevPage + 1);
        setIsLoading(false);
    };


    const handleIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
            // console.log('last element is intersecting');
            fetchData();
        }
    }
    , []);


    useEffect(() => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(handleIntersect, {
            threshold: 0,
            root: null,
        });

        lastElementRef.current && observer.current.observe(lastElementRef.current);
        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, []);
    
    return (
        <div className="mock-component-container">
            <h1 className="mock-total-sum">Total: ${totalSum}</h1>
            {data.map((item, index) => (
                <MockComponent key={index} data={item} index={index} />
            ))}
            {isLoading && <div>Loading...</div>}
            <div className="debug" ref={lastElementRef}>EOF</div>
        </div>
    );
};

export default MockComponentContainer;