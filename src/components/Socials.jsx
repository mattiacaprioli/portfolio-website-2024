// import social data
import { social } from '../data'

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
        {social.map((item, index) => {
            return (
                <li className='flex justify-center items-center text-accent' key={index}>
                    <a
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={item.name}
                        className='text-base'
                    >
                        {item.icon}
                    </a>
                </li>
            )
        })}
    </ul>
  )
}

export default Socials
