import '../styles/globals.css';

export default function ContactInfo() {
  return (
    <section className="contact-content-card">
      <div className="flex flex-start gap-4 items-center">     
        <a className=' bg-avatar w-20 h-20 rounded-[20px]'></a>
        <div className=''>
          <h1 className='name'>Peter James M. Cabantog</h1>
          <p className='title'>Front-end Developer</p>
        </div>
      </div> 
    </section>
  )
}