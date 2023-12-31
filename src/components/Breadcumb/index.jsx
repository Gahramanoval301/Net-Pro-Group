import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function BreadCumb({ breadcumb = '' }) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" sx={{
        color: 'primary.main'
      }} separator={
        <PlayArrowIcon fontSize="small" style={{
          verticalAlign: 'middle'
        }} />
      }>
        <Link underline="hover" color="inherit" href="/">
          Əsas səhifə
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/qaleriya-bloq"
        >
          Bloq
        </Link>
        {
          breadcumb ?
            <Link
              underline="hover"
              color="primary"
              href={`/qaleriya-bloq/bloq/${breadcumb}`}
              aria-current="page"
              sx={{ fontWeight: 600 }}
            >
              {breadcumb}
            </Link> : null
        }
      </Breadcrumbs>
    </div>
  );
}
