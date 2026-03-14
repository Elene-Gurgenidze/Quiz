export default function MainOptionDark({ icon, title }) {
    return (
        <>
            <div className="option-card_dark">
                <div className="letter-wrap">
                    <img className="letter--options" src={icon}></img>
                </div>
                <h1 className="title--options">{title}</h1>
            </div>  
        </>
    )
}