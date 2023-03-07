import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesSummary from './components/sales-summary';
import { buildSalesByGenderChart } from './helpers';
import { FilterData, Gender, PieChartConfig, SalesByGender } from './types';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params]);

  const formatGender = (gender: Gender) => {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outros'
    };

    return textByGender[gender];
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Filter onFilterChange={onFilterChange} />
        <div className="base-card">
          <SalesSummary filterData={filterData} />
          <PieChartCard
            name="Lojas"
            labels={salesByGender?.labels}
            series={salesByGender?.series}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
