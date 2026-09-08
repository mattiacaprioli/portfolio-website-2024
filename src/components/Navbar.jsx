// import navigation data
import {navigation} from '../data'

// import Link
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav>
      {/* space-x-6 fino a xl: con 7 voci e il logo da 262px, a 1024 lo spazio
          da 2rem non ci sta. */}
      <ul className='flex space-x-6 xl:space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) =>{
            return ( 
                <li 
                    className='text-white hover:text-accent cursor-pointer'
                    key={index}
                >
                    <Link
                        to={item.href}
                        href={`#${item.href}`}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className='transition-all duration-300'
                    >
                        {item.name}
                    </Link>
                </li>
            )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
