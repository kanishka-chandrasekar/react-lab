function Card({fullName,occ,nameChange}){
    return(
        <>
        <div>
            <h2>{fullName}</h2>
            <h2>{occ}</h2>
        </div>
        <button onClick={nameChange}>name change</button>
        </>
    )
}

export default Card;