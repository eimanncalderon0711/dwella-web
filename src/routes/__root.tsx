import {createRootRouteWithContext,Outlet} from "@tanstack/react-router";
import { useAuth } from "../contexts/auth/AuthContext";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRouteWithContext<{
  auth: ReturnType<typeof useAuth>;
}>()({
  component: __root,
});


function __root() {
  return (
    <>
    <Outlet />
    <TanStackRouterDevtools/>
    </>
  )
}

export default __root
