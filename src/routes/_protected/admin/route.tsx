import { createFileRoute, Outlet } from '@tanstack/react-router'
import SideBar from '../../../components/admin/sidebar/SideBar'

export const Route = createFileRoute('/_protected/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
        <div className="d-flex vh-100 flex-column flex-column-reverse flex-sm-row">
          <SideBar/>
          <div className='w-100 overflow-auto'>
            <Outlet/>
          </div>
        </div>
      </>
}
