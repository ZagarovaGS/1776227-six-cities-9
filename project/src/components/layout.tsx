import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header';


export default function Layout() {
  return (
    <React.Fragment>
      <Header />
      <main className="content">
        <Outlet />
      </main>
    </React.Fragment>
  );
}
