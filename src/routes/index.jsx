import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
import EkycPlatform from 'pages/solutions/EkycPlatform'
import RarEkyc from 'pages/solutions/RarEkyc'
import Model from 'pages/model'
import ModelDetail from 'pages/model/pageModel/ModelDetail'
import Introduction from 'pages/NQ_57'

const solutionsRoutes = [
  {path: 'ekyc-platform', element: <EkycPlatform />},
  {path: 'rar-ekyc', element: <RarEkyc />},
]
const modelsRoutes = [
  {path: '', element: <Model />}, // Trang danh sách mô hình
  {path: ':id', element: <ModelDetail />}, // Trang chi tiết mô hình
]
const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RarEkyc />,
      },
      {path: 'nghiquyet-57', element: <Introduction />},
      {path: 'solution', children: solutionsRoutes},
      {path: 'mo-hinh', children: modelsRoutes},
    ],
  },
  {path: '*', element: <ErrorPage />},
])

export default Routers
