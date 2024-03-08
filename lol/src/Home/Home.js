import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [summonerName, setSummonerName] = useState('');
    const [region, setRegion] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Chuyển hướng đến trang mới và truyền dữ liệu
         navigate('/summoner', {state:{ summonerName, region }});
    };

    const regions = [
        { id: "na1", name: "Bắc Mỹ" },
        { id: "br1", name: "Brazil" },
        { id: "sg1", name: "Singapore" },
        { id: "eun1", name: "Đông Âu Bắc" },
        { id: "euw1", name: "Tây Âu" },
        { id: "tr1", name: "Thổ Nhĩ Kỳ" },
        { id: "jp1", name: "Nhật Bản" },
        { id: "kr", name: "Hàn Quốc" },
        { id: "lan1", name: "Mỹ Latinh Bắc" },
        { id: "las1", name: "Mỹ Latinh Nam" },
        { id: "oce1", name: "Châu Đại Dương" },
        { id: "ru", name: "Nga" },
        { id: "vn2", name: "Việt Nam" }
    ];

    return (
        <div className="container">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={summonerName} 
                    onChange={(event) => setSummonerName(event.target.value)} 
                />
                <select 
                    value={region} 
                    onChange={(event) => setRegion(event.target.value)}
                >
                    {regions.map((region) => (
                        <option key={region.id} value={region.id}>{region.name}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Home;
