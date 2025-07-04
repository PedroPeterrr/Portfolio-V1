import Image from 'next/image'

import { 
  React,
  NextIcon,
  JavaScriptIcon,
  MongoDBIcon,
  Swagger,
  TailwindIcon,
  PostmanIcon,
  NodeIcon
} from '@/assets/assets'

const SKILL_MAP = {
  react: {
    name: 'React',
    href: 'https://reactjs.org/',
    Icon: React,
  },
  next: {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    Icon: NextIcon,
  },
  js: {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    Icon: JavaScriptIcon,
  },
  mongodb: {
    name: 'MongoDB',
    href: 'https://www.mongodb.com/',
    Icon: MongoDBIcon,
  },
  swagger: {
    name: 'Swagger',
    href: 'https://swagger.io/',
    Icon: Swagger,
  },
  tailwind: {
    name: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
    Icon: TailwindIcon,
  },
  postman: {
    name: 'Postman',
    href: 'https://www.postman.com/',
    Icon: PostmanIcon,
  },
  node: {
    name: 'Node.js',
    href: 'https://nodejs.org/',
    Icon: NodeIcon,
  },
}

export default function SkillLink({ type }) {
  const skill = SKILL_MAP[type]
  if (!skill) return null

  const { name, href, Icon } = skill

  return (
    <a
      key={type}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="
        flex-shrink-0
        transform transition duration-200 hover:scale-110 
        "
    >
      <Image
        src={Icon}
        alt={`${name} icon`}
        className='skills-icon'
      />
    </a>
  )
}
