import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
    
    return (
        <>
            <NavBar />
            <div className='py-10 px-10'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path='search' element={<SearchPage />} />
                    <Route path='/heroe/:id' element={<HeroPage />} />
                    <Route path="/*" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}