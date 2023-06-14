import PropTypes from 'prop-types';
import Style from './Statistics.module.css';
import React from 'react';
import getRandomColor from "../ColorRandom/ColorRandom";


export const Statistics = ({ title, statistics }) =>{
    return(
    <section className={Style.statistics}>
        <div className={Style.divTitle}>
        <h2 className={Style.title}>{title}</h2>
        </div>
        <ul className={Style.styleList}>
            {statistics.map((user) => {
                const styleColor = {
                background: getRandomColor(), // Llama a la función getRandomColor para obtener un color aleatorio
                };

                return (
                <li style={styleColor} className={Style.item} key={user.id}>
                    <span className={Style.label}>{user.label}</span>
                    <span className={Style.percentage}>{user.percentage}%</span>
                </li>
                );
            })}
        </ul>
    </section>
)
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label:PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,
    }),
};