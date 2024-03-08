import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function summoner() {
  const [summonerData, setSummonerData] = useState(null);
  const location = useLocation();
  const { summonerName, region } = location.state;
  const api_key="RGAPI-2cfac404-104b-471a-897d-01403f1bd16f";
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api_key}`;

      try {
        const response = await axios.get(url);
        setSummonerData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [region, summonerName]);

  const renderSummonerInfo = (data) => {
    return (
      <div>
        <h1>{data.name} ({data.summonerLevel})</h1>
        <img src={`https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/${data.profileIconId}.png`} alt={`${data.name} profile icon`} />
        {/* ... Hiển thị các thông tin khác */}
      </div>
    );
  };

  return (
    <div className="container">
      {summonerData ? renderSummonerInfo(summonerData) : <p>Đang tải...</p>}
    </div>
  );
}

export default summoner;
