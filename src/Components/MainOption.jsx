export default function MainOption({ icon, title }) {
    return (
        <>
            <div className="option-card">
                <div className="letter-wrap">
                    <img className="letter--options" src={icon}></img>
                </div>
                <h1 className="title--options">{title}</h1>
            </div>  
        </>
    )
}