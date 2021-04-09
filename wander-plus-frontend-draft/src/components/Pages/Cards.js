import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div>
            <div className='cards'>
                <h1>Check out these TOP FIVE REVIEWED destinations!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                            src="images/img-1.jpg"
                            text="Snorkel with sea turtles in the beautiful clear waters of Maunalua Bay"
                            label='Honolulu, Hawaii'
                            path='/locations/34'
                            />
                            <CardItem 
                            src="images/img-3.jpg"
                            text="Cuddle with Molly, Toph, and a few chickens at Dane's Farm"
                            label='Austin, Texas'
                            path='/locations/44'
                            />
                        </ul>
                        <ul className="cards__items">
                            <CardItem 
                            src="images/img-5.jpg"
                            text="Take a camel ride and explore the Great Pyramids of Giza"
                            label='Cairo, Egypt'
                            path='/locations/46'
                            />
                            <CardItem 
                            src="images/img-2.jpg"
                            text="Experience Tokyo's unlimited choice of shopping, entertainment, culture, and dining"
                            label='Tokyo, Japan'
                            path='/locations/43'
                            />
                            <CardItem 
                            src="images/img-4.jpg"
                            text="Take a stroll through the Nation's Capital on the Fourth of July"
                            label='Washington, DC'
                            path='/locations/45'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards