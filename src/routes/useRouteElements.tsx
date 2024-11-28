
import { ImportList } from "@/pages/ImportList"
import { Dashboard } from "../pages/Dashboard"
import Login from "../pages/Login"

import NotFound from "../pages/NotFound"
import { useRoutes } from "react-router-dom"
import { MainLayout } from "@/layouts/MainLayout"
import { ExportList } from "@/pages/ExportList"
import { Users } from "@/pages/Users"

const useRouteElements = () => {
  // function ProtecedRoute() {
  //   const { isAuthenticated } = useContext(AppContext)
  //   return isAuthenticated ? <Outlet /> : <Navigate to='login' />
  // }
  // function RejectedRoute() {
  //   const { isAuthenticated } = useContext(AppContext)
  //   return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  // }
  const routeElements = useRoutes([
    // {
    //   path: '',
    //   element: <RejectedRoute />,
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <Login />
    //       )
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   element: <ProtecedRoute />,
    //   children: [
    //     {
    //       path: '/',
    //       element: (
    //         <Dashboard />
    //       )
    //     },
    //     {
    //       path: 'login',
    //       index: true,
    //       element: (
    //         <Login />
    //       )
    //     }
    //   ]
    // },
    {
      path: '/',
      element: (
        <MainLayout title="Dashboard">
          <Dashboard />
        </MainLayout>
      )
    },
    {
      path: '/danh-sach-nhap-hang',
      element: (
        <MainLayout title="Danh sách nhập hàng">
          <ImportList />
        </MainLayout>

      )
    },
    {
      path: '/danh-sach-xuat-hang',
      element: (
        <MainLayout title="Danh sách xuất hàng">
          <ExportList />
        </MainLayout>

      )
    },
    {
      path: '/quan-ly-nhan-su',
      element: (
        <MainLayout title="Quản lý nhân sự">
          <Users />
        </MainLayout>

      )
    },
    {
      path: 'login',
      index: true,
      element: (
        <Login />
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
