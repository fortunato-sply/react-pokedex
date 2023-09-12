import jwt_decode, { JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  errorPage: JSX.Element,
  targetPage: JSX.Element
}

export default function ProtectedRoute({ errorPage, targetPage }: ProtectedRouteProps) {
  var [page, setPage] = useState(<></>);

  const renderPage = () => {
    const token = sessionStorage.getItem('token');

    if(!token) {
      setPage(errorPage);
      return;
    }

    const decodedToken = jwt_decode<JwtPayload>(token);

    if((decodedToken?.exp as number) < new Date().getTime()) {
      setPage(errorPage);
      return;
    }

    setPage(targetPage);
  }

  useEffect(() => {
    renderPage()
  }, [])

  return page;
}