import { createLazyFileRoute, Outlet } from '@tanstack/react-router'
import SideBar from '../../components/resident/sidebar/SideBar'

export const Route = createLazyFileRoute('/resident')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log("render")
  return <>
        <div className="d-flex vh-100 overflow-hidden flex-column flex-column-reverse flex-sm-row">
          <SideBar/>
          <div className='w-100 overflow-auto'>
            <Outlet/>
          </div>
        </div>
      </>
}
