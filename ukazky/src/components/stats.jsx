import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://ajax0.lmsoft.cz/procedure.php?cmd=getPeopleList');
        const response = await axios.get('http://lm/getSummaryOfDrinks');
        if (Array.isArray(response.data) && response.data.length === 0
        && response.data.msg !== undefined) {
          setError('Žádná data.');
        } else {
          console.log(response.data);
          // setData(Object.values(response.data));
          setData(response.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="no-data">Načítám...</p>;
  }
  if (error) {
    return (
      <p className="no-data">
        Error:
        {error}
      </p>
    );
  }
  return (
    <div>
      <table className="responsive-table">
        <caption>Seznam Lidí</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>typ</th>
            <th>Vypito</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>{item.name}</td>
              <td>{item.typ}</td>
              <td>{item.drink_count}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
export default Stats;
