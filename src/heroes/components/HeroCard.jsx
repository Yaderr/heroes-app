import { Link } from "react-router-dom"

export const HeroCard = ({
    heroe,
    isFav,
    onClickFav
}) => {

    const heroimg = `/heroes/${heroe.id}.jpg`
    
    return (
        <>
        
            <div className="inline-block">
                <div className="flex animate__animated animate__fadeIn bg-white drop-shadow-lg w-[400px] h-[180px] mr-5 mb-5 rounded-lg px-4 py-4 border hover:border-indigo-500/40 transition">
                    <div className="min-w-[100px] border-2 bg-gray-200 rounded-xl" style={{backgroundImage: `url(${heroimg})`, backgroundSize: '100%', backgroundPosition: 'cover'}}>
                        {/* <img height="100%"  src={`../../src/assets/heroes/${id}.jpg`} alt="" /> */}
                    </div>
                    <div className="ml-5 max-w-[100%]">
                        <h6 className="text-lg font-bold">{ heroe.superhero }</h6>
                        <h6 className="text-sm text-gray-500">{ heroe.publisher }</h6>
                        <p className="text-xs">{ heroe.alter_ego }</p>
                        {
                            (heroe.alter_ego !== heroe.characters) && (<p className="text-xs">{ heroe.characters }</p>)
                        }
                        <p className="text-xs">{ heroe.first_appearance }</p>

                        <Link className="underline text-indigo-500 text-md" to={`/heroe/${heroe.id}`}>Ver más...</Link>
                        <div className="absolute bottom-0 right-0 p-4">
                            
                               
                            <svg className={isFav?'w-6 h-6 stroke-indigo-500 fill-indigo-500 hover:cursor-pointer animate__animated animate__bounceIn':'w-6 h-6 stroke-indigo-500 hover:fill-indigo-500 hover:cursor-pointer animate__animated animate__fadeIn'} onClick={() => onClickFav(heroe, isFav)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>     
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}