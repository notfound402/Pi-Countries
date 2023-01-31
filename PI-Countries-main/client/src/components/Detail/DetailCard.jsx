import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail , cleanDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ActivityCards } from "../ActivityCards/ActivityCards";
import { useParams } from "react-router-dom";
import "./detail.css"

export function DetailCard() {
const {id} = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCountryDetail(id));
	}, [dispatch, id]);
	 useEffect(() => {
	 	dispatch(cleanDetails());
	 }, [dispatch]);

	
	const myCountries =  useSelector((state) => state.details);
	


	if (myCountries.length === 0) {
		return ( 
			<>
			<h1>Undefined</h1>
				<div className="conten_detail"></div>
			</>
		);
	} else {
		return (
			<div className="main-detail">
				
				{
					<div className="detailbox">
						<h1 className="country">
							Country: {myCountries.name}
						</h1>
						<h2 className="continent">
							Continent: {myCountries.continent}
						</h2>
						 <img src={myCountries.imagen} alt="Flag" className="flag" /> 
						 <h2 className="population">Population: {myCountries.population} people</h2>
						 <h2 className="capital">Capital: {myCountries.capital}</h2>
						<h2 className="area">Area: {myCountries.area} km2</h2>
						<h2 className="subregion">Subregion: {myCountries.subregion == null ? 'Doesnt Have' : myCountries.subregion}</h2>  
					</div>
				}
				<div>
				<h1>
				 {myCountries.activities?.map(e => {
					console.log(e)
					return (
						<ActivityCards
							name={e.name}
							difficulty={e.difficulty}
							duration={e.duration}
							season={e.season}
						/>
					);
				})} 
				</h1>
				</div>
				

				<Link to="/home">
					<button className="button">Back</button>
				</Link>
			</div>
		);
	}
};

export default DetailCard;