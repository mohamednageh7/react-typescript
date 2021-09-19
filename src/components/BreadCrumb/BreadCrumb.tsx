import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

interface Props {
    breadcrumbValue:string[]
}

const BreadCrumb: React.FC<Props> = ({breadcrumbValue}) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          {breadcrumbValue[0]}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          {breadcrumbValue[1]}
        </Link>
        <Typography color="text.primary">{breadcrumbValue[2]}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrumb
