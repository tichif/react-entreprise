import api, { EndPoints } from 'apis/axios';
import { SaleType } from 'models/sales-type';

export async function getSalesAxios() {
  return await api.get<SaleType[]>(EndPoints.sales);
}
