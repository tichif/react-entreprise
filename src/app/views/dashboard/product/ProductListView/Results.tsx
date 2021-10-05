import React, { useState, ChangeEvent } from 'react';
import {
  makeStyles,
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  FormControlLabel,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TextField,
} from '@material-ui/core';
import clsx from 'clsx';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Image as ImageIcon,
  Edit as EditIcon,
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon,
} from 'react-feather';

import {
  availabilityOptions,
  categoryOptions,
  sortOptions,
} from 'helpers/inputProductOptions';
import { ProductType } from 'models/product-type';
import {
  applyFilter,
  applyPagination,
  getInventoryLabel,
  TableResultsHelpers,
} from './TableResultsHelpers';

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

type Props = {
  className?: string;
  products?: ProductType[];
};

const Results = ({ className, products, ...rest }: Props) => {
  const classes = useStyles();

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState('');

  const [sort, setSort] = useState<string>(sortOptions[0].value);
  const [filters, setFilters] = useState<TableResultsHelpers | any>({
    category: null,
    availability: null,
    inStock: null,
    isShippable: null,
  });

  return (
    <div>
      <h1>Results for Product View</h1>
    </div>
  );
};

export default Results;
