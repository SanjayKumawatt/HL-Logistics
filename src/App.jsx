import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import WhatWeBuild from './Pages/WhatWeBuilding'
import TransportPage from './Pages/TransportPage'
import WarehousePage from './Pages/WareHourseManagement'
import RoutePlanningPage from './Pages/RoutingPlanning'
import TMSProductPage from './Pages/TMSProduct'
import WMSProductPage from './Pages/WMS'
import CapacityPlannerPage from './Pages/CapacityPlanner'
import ResourcesPage from './Pages/ResourcesPage'
import AboutUsPage from './Pages/AboutPage'
import EcommercePage from './Pages/Ecommerce'
import FMCGPage from './Pages/FMCGPage'
import ManufacturingPage from './Pages/Manufactiring'
import PharmaPage from './Pages/Pharma'
import RetailPage from './Pages/Retail'
import ThreePLPage from './Pages/Threel'
import ReachUsPage from './Pages/ReachUs'
import IndustriesPage from './Pages/Industries'
import LegalPage from './Pages/Legal'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/what-we-build",
          element: <WhatWeBuild />
        },
        {
          path: "/platform/transport",
          element: <TransportPage />
        },
        {
          path: "/platform/warehouse",
          element: <WarehousePage />
        },
        {
          path: "/platform/route-planning",
          element: <RoutePlanningPage />
        },
        {
          path: "/products/tms",
          element: <TMSProductPage />
        },
        {
          path: "/products/wms",
          element: <WMSProductPage />
        },
        {
          path: "/products/capacity-planner",
          element: <CapacityPlannerPage />
        },
        {
          path: "/industries/ecommerce",
          element: <EcommercePage />
        },
        {
          path: "/industries/fmcg",
          element: <FMCGPage />
        },
        {
          path: "/industries/manufacturing",
          element: <ManufacturingPage />
        },
        {
          path: "/industries/pharma",
          element: <PharmaPage />
        },
        {
          path: "/industries/retail",
          element: <RetailPage />
        },
        {
          path: "/industries/3pl",
          element: <ThreePLPage />
        },


        {
          path: "/resources",
          element: <ResourcesPage />
        },
        {
          path: "/about-us",
          element: <AboutUsPage />
        },
        {
          path: "/reach-us",
          element: <ReachUsPage />
        },
        {
          path: "/industries",
          element: <IndustriesPage />
        },



      ]
    },
    {
      path: "/legal",
      element: <LegalPage />
    },

  ])

  return (
    
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  )
}

export default App