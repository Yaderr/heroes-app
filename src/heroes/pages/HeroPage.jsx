import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from 'react'

export const HeroPage = () => {

    const { id } = useParams()

    const hero = useMemo(() => getHeroById(id), [id])

    const navigator = useNavigate()

    const onNavigateBack = () => {
        navigator(-1)
    }

    if(!hero) {
        return (
            <Navigate to="/marvel" />
        )
    }
    
    return ( 
        <>
        <button className='animate__animated animate__fadeInLeft' onClick={onNavigateBack}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </button>
            <div className="flex justify-center animate__animated animate__fadeIn">
                <div>
                    <img className='rounded-lg border-2' src={`./heroes/${hero.id}.jpg`} alt="" />
                </div>
                <div className='ml-10 max-w-[500px]'>
                    <h1 className='text-2xl font-bold'>{ hero.superhero }</h1>
                    <ul className='space-y-2 mt-5 text-sm'>
                        <li><strong>Publisher:</strong> { hero.publisher } </li>
                        <li><strong>Alter ego:</strong> { hero.alter_ego } </li>
                        <li><strong>First appearance:</strong> { hero.first_appearance } </li>
                        <li className=''>
                            {
                                hero.characters.split(',').map(x => (<span key={x} className='bg-gray-200 mt-2 mr-2 p-2 rounded-md font-bold text-indigo-500 inline-block'>{x}</span>))    
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}