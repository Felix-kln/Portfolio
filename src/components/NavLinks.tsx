import React from "react";

interface IProps {
  className: string;
  closeMobile?: any;
}

const NavLinks = (props: IProps) => {
  const toggleMobileNav = () => {
    if (props.closeMobile) {
      props.closeMobile(false);
    }
  };
  return (
    <ul className={props.className}>
      <li>
        <a
          href="#about-me"
          className="nav__list--link"
          onClick={toggleMobileNav}
        >
          About me
        </a>
      </li>
      <li>
        <a href="#exp" className="nav__list--link" onClick={toggleMobileNav}>
          Experience
        </a>
      </li>
      <li>
        <a href="#work" className="nav__list--link" onClick={toggleMobileNav}>
          Work
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="nav__list--link"
          onClick={toggleMobileNav}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
