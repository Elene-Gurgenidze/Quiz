export default function MainOptionDark({ letter, title }) {
    return (
        <>
            <div className="option-card_dark">
                <div className="letter-wrap">
                    <h1 className="letter--options_dark">{letter}</h1>
                </div>
                <h1 className="title--options">{title}</h1>
            </div>  
        </>
    )
}