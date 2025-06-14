import { createFileRoute, Outlet } from '@tanstack/react-router'
import SideBar from '../../components/resident/sidebar/SideBar'

export const Route = createFileRoute('/resident')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
        <div className="d-flex vh-100 overflow-hidden">
          <SideBar/>
          <Outlet/>
        </div>
      </>
}
