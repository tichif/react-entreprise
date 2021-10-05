import React from 'react';

import Label from 'app/components/label';
import { ProductType, InventoryType } from 'models/product-type';

export type TableResultsHelpers = {
  availability: 'available' | 'unavailable';
  category?: string;
  inStock?: boolean;
  isShippable: boolean;
};

export const applyFilter = (
  products: ProductType[],
  query: string,
  filters: TableResultsHelpers,
) => {
  return products.filter(product => {
    let matches = true;
    if (
      query &&
      !product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    ) {
      matches = false;
    }
    if (filters.category && product.category !== filters.category) {
      matches = false;
    }
    if (filters.availability) {
      if (filters.availability === 'available' && !product.isAvailable) {
        matches = false;
      }
      if (filters.availability === 'unavailable' && product.isAvailable) {
        matches = false;
      }
    }
    if (
      filters.inStock &&
      !['in_stock', 'limited'].includes(product.inventoryType)
    ) {
      matches = false;
    }
    if (filters.isShippable && !product.isShippable) {
      matches = false;
    }
    return matches;
  });
};

export const applyPagination = (
  products: ProductType[],
  page: number,
  limit: number,
) => {
  return products.slice(page * limit, page * limit + limit);
};

export const getInventoryLabel = (
  inventoryType: InventoryType,
): JSX.Element => {
  const map = {
    in_stock: {
      text: 'In Stock',
      color: 'success',
    },
    limited: {
      text: 'Limited',
      color: 'warning',
    },
    out_of_stock: {
      text: 'Out of Stock',
      color: 'error',
    },
  };
  const { text, color }: any = map[inventoryType];
  return <Label color={color}>{text}</Label>;
};

const TableResultsHelpers = () => {
  return <div></div>;
};

export default TableResultsHelpers;
