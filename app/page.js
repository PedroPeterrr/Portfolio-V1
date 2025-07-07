import '../styles/globals.css'; 

import {
  ContactInfo,
  MainContent
} from '@/components/index.js';

export default function Home() {
  return (
    <main>
        <ContactInfo />
        <MainContent />
    </main>
  );
}
