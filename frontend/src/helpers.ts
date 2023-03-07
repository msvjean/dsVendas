import { SalesByGender, SalesByPaymentMethod } from './types';

export const buildSalesByGenderChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethod[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
