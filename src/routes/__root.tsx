import {createRootRouteWithContext,Outlet} from "@tanstack/react-router";
import { useAuth } from "../contexts/auth/AuthContext";

export const Route = createRootRouteWithContext<{
  auth: ReturnType<typeof useAuth>;
}>()({
  component: __root,
});


function __root() {
  return (
    <>
    {/* <Link to="/resident">Resident</Link> */}
    <Outlet />
    </>
  )
}

export default __root
