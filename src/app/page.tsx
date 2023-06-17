'use client';
import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState<String>('אלחנדרו');
    return (
        <>
            <div dir="rtl">
                <p className="text-[#EEEEEE]">היי, {name}</p>
                <p></p>
            </div>
        </>
    );
};

export default Home;
