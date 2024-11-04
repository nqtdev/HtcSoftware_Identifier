import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
import CheckIdSr from 'pages/products/check-id-sr'
import CheckIdEt from 'pages/products/check-id-et'
import MetaEye from 'pages/products/meta-eye'
import IdPassPage from 'pages/IdPass'
import CheckIdRt from 'pages/products/check-id-r301'
import CheckIdHn from 'pages/products/check-id-hn202'
import EkycPlatform from 'pages/solutions/EkycPlatform'
import RarEkyc from 'pages/solutions/RarEkyc'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IdPassPage />,
      },
      {
        path: 'solution',
        children: [
          // Nhóm các route con vào trong 'products'
          {
            path: 'rar-ekyc',
            element: <RarEkyc />,
          },
          {
            path: 'ekyc-platform',
            element: <EkycPlatform />,
          },
        ],
      },
      {
        path: 'products',
        children: [
          // Nhóm các route con vào trong 'products'
          {
            path: 'check-id-sr',
            element: <CheckIdSr />,
          },
          {
            path: 'check-id-et100',
            element: <CheckIdEt />,
          },
          {
            path: 'meta-eye',
            element: <MetaEye />,
          },
          {
            path: 'check-id-r301',
            element: <CheckIdRt />,
          },
          {
            path: 'check-id-hn212',
            element: <CheckIdHn />,
          },
        ],
      },
      {
        path: '*', // Sử dụng '*' để xử lý tất cả các đường dẫn không hợp lệ
        element: <ErrorPage />,
      },
    ],
  },
])

export default Routers
