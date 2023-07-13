function Car(props) {
    const { car, model, year, vin, image, availability } = props


    return (
        <div className="card">
            <h2>{car} {model} - {year}</h2>
            <h5>{vin}</h5>
            <img src={image} alt={car} />
            {availability ? (<h4 className='green'>Есть в наличии</h4>):
            (<h4 className='red'>Нет в наличии</h4>)}
        </div>
    )
}

export default Car