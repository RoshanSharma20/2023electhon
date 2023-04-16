import React, { useState } from "react";
import { useEffect } from "react";
const Demoboard = () => {
    const [rank, setRank] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const data = await fetch("http://localhost:5000/user/getall");
        const c = await data.json();
        setRank(c.feed.slice(0, 4));
    }

    const renderList = rank.map((item, index) => (
        // <div key={index}>{item.title}<img src={item.banner_image}></img></div>
        <tr className="border-b dark:border-neutral-500">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
            <td className="whitespace-nowrap px-6 py-4">{item.totalPoints}</td>
            <td className="whitespace-nowrap px-6 py-4">silver</td>
        </tr>
    ));
    /////////////////////////////////
    // <tr className="border-b dark:border-neutral-500">
    //     <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
    //     <td className="whitespace-nowrap px-6 py-4">Larry</td>
    //     <td className="whitespace-nowrap px-6 py-4">Wild</td>
    //     <td className="whitespace-nowrap px-6 py-4">@twitter</td>
    // </tr>
    /////////////////////////////////
    return (
        <>
            {renderList}
        </>
    )
}

export default Demoboard
