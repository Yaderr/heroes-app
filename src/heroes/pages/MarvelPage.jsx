import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
    
    return (
        <>
            <h2 className="text-md font-bold">MarvelPage</h2>
            <br />

            <HeroList publisher="Marvel Comics" />
        </>
    )
}