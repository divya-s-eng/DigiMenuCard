 import * as React from 'react';
// //  import axios from 'axios'
// import {useState,useEffect } from 'react'
import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid'; // use Grid not Grid2 unless intentionally

import Crd from './Crd';
import Menu from './Menu';

// import Dashbrd from './Dashbrd';
// import Card1 from './Card1';
// const Dashboard=()=> <div>Dashboard Content</div>
const Orders=()=> <div>Orders Content</div>




const Integrations=()=> <div> Content Integrations</div>
// const Card=()=> <div>card Content</div>

const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  // { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
    { segment: 'orders', title: 'Menu', icon: <DashboardIcon /> },
  
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  { segment: 'integrations', title: 'Integrations', icon: <LayersIcon /> },
  // { segment: 'Card', title: 'Card', icon: <ShoppingCartIcon /> },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960, // was 600, changed to standard breakpoint
      lg: 1280,
      xl: 1920,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);
  return React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);
  return router;
}

const gatePageComponent =(pathname)=>{
  switch (pathname){
    // case '/dashboard':return<Dashbrd/>;
    case '/orders':return<Menu/>;
    

  
    case '/integrations':return<Crd/>;
    
    default: return<Menu/>;
    }
};


export default function Dash(props) {
  
  const router = useDemoRouter('dashboard'); // ✅ lowercase to match segment
return (
    <AppProvider
    
      navigation={NAVIGATION}
      
      branding={{
        logo: <img src="data:image/png;base64,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" alt=" logo" />,
        title: 'MenuCard',
        // homeUrl: '/toolpad/core/introduction',
      }}
      router={router}
      theme={demoTheme}
     >
      
      
 
    
    <DashboardLayout>
        <PageContainer>
         <Grid container spacing={1}>
        <Grid item xs={12}>{gatePageComponent (router.pathname)}
         </Grid>
        </Grid>
             
           
         
       
          
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}



