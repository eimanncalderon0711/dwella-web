import { createFileRoute, Link, Outlet, useLocation, useNavigate } from '@tanstack/react-router'
import { Container, Stack } from 'react-bootstrap';
import Header from '../../../../components/Header';
import { IoMdAdd, IoMdDownload } from 'react-icons/io';
import Search from '../../../../components/Search';

export const Route = createFileRoute('/admin/financial/_financial')({
  component: RouteComponent,
})

function RouteComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Container className="pt-sm-5 d-flex overflow-auto flex-column">
        {/* Header component*/}
        <Header path={"admin"}>
          <div className="d-flex gap-3">
            <div
              onClick={() => navigate({ to: "/admin/financial/record-payment" })}
              className="d-flex align-items-center gap-2 py-3 px-5 rounded-3"
              style={{ backgroundColor: "#344CB7", cursor: "pointer" }}
            >
              <IoMdAdd size={25} color="white" />
              <a className="text-decoration-none text-light fw-bold">Record</a>
            </div>
          </div>
        </Header>

        {/* Search engine component with download button*/}
        <Search>
          <div
            className="d-flex align-items-center gap-2 px-4 py-3 rounded-3"
            style={{ backgroundColor: "#CED4F5", cursor: "pointer" }}
          >
            <IoMdDownload />
            <span className="fw-bold">Download</span>
          </div>
        </Search>

        <Stack direction="horizontal" gap={3}>
          <Link
            to="/admin/financial"
            className="text-decoration-none fw-bold text-black"
            style={{
              borderBottom: location.pathname.endsWith("/financial")
                ? "#344CB7 5px solid"
                : "",
            }}
          >
            Payment Records
          </Link>
          <Link
            to="/admin/financial/monthly-due"
            className="text-decoration-none fw-bold text-black"
            style={{
              borderBottom: location.pathname.endsWith("/financial/monthly-due")
                ? "#344CB7 5px solid"
                : "",
            }}
          >
            Monthly Dues
          </Link>

          {location.pathname.endsWith("/financial/monthly-due") && <Link to='' className='ms-auto text-decoration-none border border-primary px-3 py-2 rounded-3 fw-bold'>+ Upload</Link>}
        </Stack>
        <Outlet />
      </Container>
    </>
  );
}
