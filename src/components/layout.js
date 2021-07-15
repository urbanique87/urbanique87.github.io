import * as React from "react";
import { Link } from "gatsby";

/**
 * Layout
 * @param {any} props.children
 */
const Layout = ({ children }) => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/post/cleancode/intro">Clean Code, Intro</Link>
          </li>
          <li>
            <Link to="/post/cleancode/naming">Clean Code, Naming</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default Layout;
