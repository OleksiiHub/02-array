import cars from '../data/cars'
import Car from './Car'

function Cars() {
    return (
        <div className="cards">
            {cars.map((elem) => {
                return <Car key={elem.id} {...elem} />
            })}
        </div>
    )
}

export default Cars
