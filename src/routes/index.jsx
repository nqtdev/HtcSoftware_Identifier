import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
// import IdPassPage from 'pages/IdPass'
import EkycPlatform from 'pages/solutions/EkycPlatform'
import RarEkyc from 'pages/solutions/RarEkyc'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RarEkyc />,
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
        path: '*', // Sử dụng '*' để xử lý tất cả các đường dẫn không hợp lệ
        element: <ErrorPage />,
      },
    ],
  },
])

export default Routers
