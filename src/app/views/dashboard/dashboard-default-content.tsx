import React, { useEffect, useState } from 'react';

import { getSalesAxios } from 'services/saleService';
import { SaleType } from 'models/sales-type';

const DashboardDefaultContent = () => {
  const [sales, setSales] = useState<SaleType[]>([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const { data } = await getSalesAxios();
    setSales(data);
  };

  return (
    <div>
      <h1>Dashboard Default Content</h1>
      <p>{sales.length}</p>
    </div>
  );
};

export default DashboardDefaultContent;
