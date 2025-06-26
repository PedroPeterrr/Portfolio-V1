import '../styles/globals.css'; 

import {
  ContactInfo,
  MainContent
} from '@/components/index.js';

export default function Home() {
  return (
    <main className='main-container'>
        <ContactInfo />
        <MainContent />
    </main>
  );
}
