import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'
import cityData from '../TicityCities.js'

class CityShow extends React.Component {
    render() {
        const city = Object.values(cityData).filter(x => x.name === "San Diego")[0]
        return (
            <React.Fragment>
                <h3>City Info</h3>
                <div id="city-show-body">
                    <h3>Housing is a {city.housing.toFixed(2)} out of 10</h3>
                    <h3>Cost of living is a {city.costofliving.toFixed(2)} out of 10</h3>
                    <h3>Startups is a {city.startups.toFixed(2)} out of 10</h3>
                    <h3>Venture Capital is a {city.venturecapital.toFixed(2)} out of 10</h3>
                    <h3>Ease of traveling(national/international) is a {city.travel.toFixed(2)} out of 10</h3>
                    <h3>The average commute is a {city.commute.toFixed(2)} out of 10</h3>
                    <h3>Business freedom is a {city.business.toFixed(2)} out of 10</h3>
                    <h3>Overal safety is a {city.safety.toFixed(2)} out of 10</h3>
                    <h3>Healthcare is a {city.healthcare.toFixed(2)} out of 10</h3>
                    <h3>The education is a {city.education.toFixed(2)} out of 10</h3>
                    <h3>The envionmental quality is a {city.environment.toFixed(2)} out of 10</h3>
                    <h3>The local economy is a {city.economy.toFixed(2)} out of 10</h3>
                    <h3>The taxation is a {city.taxation.toFixed(2)} out of 10</h3>
                    <h3>The access to high speed internet is a {city.internetaccess.toFixed(2)} of of 10</h3>
                    <h3>The leisure and culture is a {city.leisure.toFixed(2)} out of 10</h3>
                    <h3>The tolerance level is a {city.tolerance.toFixed(2)} out of 10</h3>
                    <h3>The outdoor activites is a {city.outdoors.toFixed(2)} out of 10</h3>
                </div>
            </React.Fragment >
        );
    }
}

export default CityShow
