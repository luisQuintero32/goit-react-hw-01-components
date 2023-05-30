import PropTypes from 'prop-types';
import Style from './Statistics.module.css';
import React from 'react';
import getRandomColor from "../ColorRandom/ColorRandom";
import data from '../../data/data.json';

export const Statistics = () =>{
    return(
    <section className={Style.statistics}>
        <div className={Style.divTitle}>
        <h2 className={Style.title}>UPLOAD STATS</h2>
        </div>
        <ul className={Style.styleList}>
            {data.map((item) => {
                const styleColor = {
                background: getRandomColor(), // Llama a la función getRandomColor para obtener un color aleatorio
                };

                return (
                <li style={styleColor} className={Style.item} key={item.id}>
                    <span className={Style.label}>{item.label}</span>
                    <span className={Style.percentage}>{item.percentage}%</span>
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
      id: PropTypes.string.isRequired,label:PropTypes.string.isRequired,percentage:PropTypes.number.isRequired,
    }),
};