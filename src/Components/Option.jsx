export default function Option({ letter, title,  }) {
    return (
        <>
            <div className="option-card">
                <div className="letter-wrap">
                    <h1 className="letter--options">{letter}</h1>
                </div>
                <h1 className="title--options">{title}</h1>
            </div>  
        </>
    )
}