import { useEffect, useState } from "react";
import { BarChart,Bar,XAxis,YAxis, Tooltip } from 'recharts';
import axios from "axios";

const Axios = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonedata = data.data.data;
        const fakedata = phonedata.map((phone) => {
          return {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
        });
        setPhones(fakedata);
      }
      );
  }, []);
  return (
    <div>
      
        <BarChart
          width={730}
          height={250}
          data={phones}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis dataKey="price" />
          <YAxis />
          <Tooltip/>
          
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      
    </div>
  );
};

export default Axios;
