import React from 'react'
import Logo from '../../../assets/Home/logo.png'
import { Link } from 'react-router-dom'
import Pizza from '../../../assets/icons/pizza.svg'
import Sets from '../../../assets/icons/sets.svg'
import Wok from '../../../assets/icons/wok.svg'
import Rolls from '../../../assets/icons/rolls.svg'
import Sushi from '../../../assets/icons/sushi.svg'
import Salad from '../../../assets/icons/salad.svg'
import Soup from '../../../assets/icons/soup.svg'
import Corndog from '../../../assets/icons/corndog.svg'
import Drinks from '../../../assets/icons/drinks.svg'
import Sale from '../../../assets/icons/sale.svg'
import Soon from './Soon'

const SideBar = () => {
    return (
        <aside className='home__sidebar'>
            <div className='home__sidebar-top'>
                <Link to='/'>
                    <img className='home__sidebar-logo' src={Logo} alt='Romsem Logo' />
                </Link>
                <h1 className='home__sidebar-title'>Romsem</h1>
            </div>
            <ul className='home__sidebar-list'>
                <li className='home__sidebar-list-item'>
                    <img src={Pizza} alt="pizza" />
                    <Link className='home__sidebar-link' to="/pizza">
                        Пиццы
                    </Link>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sets} alt="sets" />
                    <Link className='home__sidebar-link' to="/sets">
                        Сеты
                    </Link>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Wok} alt="wok" />
                    <Link className='home__sidebar-link' to="/wok">
                        WOK
                    </Link>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Rolls} alt="rolls" />
                    <Link className='home__sidebar-link' to="/rolls">
                        Роллы
                    </Link>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sushi} alt="sushi" />
                    <Link className='home__sidebar-link' to="/sushi">
                        Суши
                    </Link>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Salad} alt="salad" />
                    <Link className='home__sidebar-link' to="/salad">
                        Салаты
                    </Link>
                    <Soon />
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Soup} alt="soup" />
                    <Link className='home__sidebar-link' to="/soup">
                        Супы
                    </Link>
                    <Soon />
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Corndog} alt="corndog" />
                    <Link className='home__sidebar-link' to="/corndog">
                        Корн-доги
                    </Link>
                    <Soon />
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Drinks} alt="drinks" />
                    <Link className='home__sidebar-link' to="/drinks">
                        Напитки
                    </Link>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sale} alt="sale" />
                    <Link className='home__sidebar-link' to="/sale">
                        Акции
                    </Link>
                    <Soon />
                </li>

            </ul>
        </aside>
    )
}

export default SideBar
