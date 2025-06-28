'use client';
import React from 'react';
import '../styles/globals.css';
import useMenuStore from '../stores/useMenuStore';

export default function MenuBar() {
  const { activeTab, setActiveTab } = useMenuStore();
  const items = [ 'About', 'Projects', 'Resume' ];

  return (
    <nav className="menu-bar-container">
      <ul className="menu-list">
        {items.map(item => (
          <li
            key={item}
            className={`menu-item ${activeTab === item ? 'active' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}



