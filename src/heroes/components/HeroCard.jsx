import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroimg = `/heroes/${id}.jpg`
    
    return (
        <>
            <div className="inline-block">
                <div className="flex animate__animated animate__fadeIn bg-white drop-shadow-lg w-[400px] h-[180px] mr-5 mb-5 rounded-lg px-4 py-4 border hover:border-indigo-500/40 transition">
                    <div className="min-w-[100px] border-2 bg-gray-200 rounded-xl" style={{backgroundImage: `url(${heroimg})`, backgroundSize: '100%', backgroundPosition: 'cover'}}>
                        {/* <img height="100%"  src={`../../src/assets/heroes/${id}.jpg`} alt="" /> */}
                    </div>
                    <div className="ml-5 max-w-[100%]">
                        <h6 className="text-lg font-bold">{ superhero }</h6>
                        <h6 className="text-sm text-gray-500">{ publisher }</h6>
                        <p className="text-xs">{ alter_ego }</p>
                        {
                            (alter_ego !== characters) && (<p className="text-xs">{ characters }</p>)
                        }
                        <p className="text-xs">{ first_appearance }</p>

                        <Link className="underline text-indigo-500 text-md" to={`/heroe/${id}`}>Ver más...</Link>
                    </div>
                </div>
            </div>
        </>
    )
}