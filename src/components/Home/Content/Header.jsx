import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import axios from 'axios'

const Header = () => {
    const [search, setSearch] = useState(false)
    const [all, setAll] = useState([])

    const searchHeandler = (text) => {
        if (text) {
            axios('http://localhost:8080/all')
                .then(({ data }) => setAll(Object.values(data).reduce((acc, rec) => {
                    return [...acc, rec.filter((item) => item.title.toUpperCase().startsWith(text.toUpperCase()))]
                }, []).flat()))
        } else{
            setAll([])
        }
    }

    return (
        <header className='header'>
            <div className='header__left'>
                <div className='header__phone'>
                    <p className='header__phone-title'>Наш телефон</p>
                    <a className='header__phone-tel' href='tel: +987 975 976 875'>+987 975 976 875</a>
                    <a className='header__phone-tel' href='tel: +987 346 976 875'>+987 346 976 875</a>
                    <p className='header__phone-time'>
                        <svg className='header__left-icon' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g id="Layer_31" data-name="Layer 31">
                                <path d="m16 3.5a12.5 12.5 0 1 0 12.5 12.5 12.514 12.514 0 0 0 -12.5-12.5zm0 24a11.5 11.5 0 1 1 11.5-11.5 11.513 11.513 0 0 1 -11.5 11.5zm6.225-5.854a.5.5 0 0 1 -.707.708l-5.872-5.872a.5.5 0 0 1 -.146-.353v-8.129a.5.5 0 0 1 1 0v7.922z" /></g>
                        </svg>
                        работаем с 10:00 до 00:00</p>
                </div>
                <div className='header__address'>
                    <p className='header__address-title'>Город</p>
                    <p className='header__address-city'>Бишкек</p>
                </div>
            </div>
            <div className='header__right'>
                <ul className='header__list'>
                    <li className='header__list-item'>
                        <Link to='#' className='header__link'>Отзывы</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link to='#' className='header__link'>Доставка и оплата</Link>
                    </li>
                </ul>
                <div className='header__search'>
                    <input style={{ display: `${search ? 'inline-block' : 'none'}` }} type='search' className='header__search-input' onChange={(e) => { searchHeandler(e.target.value) }} />
                    <button className='header__search-btn' type='button' onClick={() => { setSearch(!search) }}>
                        <svg className='header__right-icon' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                            <g><g><path d="M508.255,490.146l-128-128c-0.06-0.06-0.137-0.077-0.196-0.128c34.193-38.434,55.142-88.917,55.142-144.418 c0-120.175-97.425-217.6-217.6-217.6S0.001,97.425,0.001,217.6s97.425,217.6,217.6,217.6c55.501,0,105.975-20.949,144.418-55.151 c0.06,0.06,0.077,0.137,0.128,0.196l128,128c2.5,2.509,5.777,3.755,9.054,3.755s6.554-1.246,9.054-3.746 C513.247,503.253,513.247,495.147,508.255,490.146z M217.601,409.6c-105.865,0-192-86.135-192-192s86.135-192,192-192 s192,86.135,192,192S323.466,409.6,217.601,409.6z" />
                            </g></g>
                        </svg>
                    </button>
                    <ul className='header__search-list' style={{ display: `${search && all.length ? 'flex' : 'none'}` }}>
                        {all.map((item, idx) =>
                            <li key={idx} className='header__search-list-item'>
                                <img className='header__search-list-img' src={item.imageUrl} alt="" />
                                <div className='header__search-list-info'>
                                    <h2 className='header__search-list-title'>{item.title}</h2>
                                    <p className='header__search-list-price'>{item.price}</p>
                                </div>
                            </li>
                        )}
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header
