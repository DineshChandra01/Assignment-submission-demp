function Service (props){

return (
    <div className="card">
        <div className="card-img">
            
        </div>
        <h1 className="card-tile">{props.title}</h1>
        <p className="card-desc">{props.desc} </p>
        <p className="btn-parent">
        <button className="card-btn">REad More</button>

        </p>
        
    </div>
)


}

export default Service;