import '../styles/globals.css'; 

import {
  ContactInfo,
  MainContent
} from '@/components/index.js';

export default function Home() {
  return (
    <main className='main-container'>
      <h1 className="parent-container">
        <ContactInfo />
        <MainContent />
      </h1>
    </main>
  );
}
