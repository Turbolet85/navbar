import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import { links, social } from '../../content/data';
import logo from '../../content/logo.svg';
import styles from './navbar.module.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef<HTMLUListElement | null>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linkContainerStyles = {
    height:
      showLinks && linksRef.current
        ? `${linksRef.current.getBoundingClientRect().height}px`
        : '0px',
  };
  return (
    <nav>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} className={styles.logo} alt={'logo'} />
          <button className={styles.navToggle} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className={styles.linksContainer} style={linkContainerStyles}>
          <ul className={styles.links} ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url} className={styles.link}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className={styles.socialIcons}>
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
