import React from 'react'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Pizza from './routes/Pizza'
import Salad from './routes/Salad'
import Sale from './routes/Sale'
import Sets from './routes/Sets'
import Soup from './routes/Soup'
import CornDog from './routes/CornDog'
import Sushi from './routes/Sushi'
import Wok from './routes/Wok'
import Rolls from './routes/Rolls'
import Drinks from './routes/Drinks'
import Main from './routes/main'
import Product from './Product/Product'

const Content = () => {
    return (
        <section className='home__content'>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/pizza' element={<Pizza />} />
                    <Route path='/sets' element={<Sets />} />
                    <Route path='/wok' element={<Wok />} />
                    <Route path='/rolls' element={<Rolls />} />
                    <Route path='/sushi' element={<Sushi />} />
                    <Route path='/salad' element={<Salad />} />
                    <Route path='/soup' element={<Soup />} />
                    <Route path='/corndog' element={<CornDog />} />
                    <Route path='/drinks' element={<Drinks />} />
                    <Route path='/sale' element={<Sale />} />
                    <Route path='/:path/product/:id' element={<Product />} />
                </Routes>
            </div>

        </section>
    )
}

export default Content
