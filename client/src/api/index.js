import axios from 'axios';


export const fetchData = async () => {
  let corona_stat_url = 'https://covid19.mathdro.id/api/countries/india';
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(corona_stat_url);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

