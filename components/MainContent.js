"use client"
import React from 'react';
import '../styles/globals.css';

import useMenuStore from '../stores/useMenuStore';

import { 
  MenuBar,
  About,
  Project,
  Resume
 } from './index.js';

export default function MainContent() {

  const activeTab = useMenuStore((state) => state.activeTab);
  
  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return <Project />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
    <section className="main-content-card">
        <MenuBar />
        {renderContent()}
    </section>
    </>
  );
}