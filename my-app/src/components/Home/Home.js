import React from 'react';
import Slide from '../Slide';
import Service from '../Service';
import CardList from '../CardList';
import CardDetail from '../CardDetail';
import SideContent from '../SlideContent';
import Sales from '../Sales';
import { ProductData } from "../../Helpers/ProductData";



const Home = () => {
    return (
        <>
            <Slide />
            <Service />
            <CardList data={ProductData}></CardList>
            <CardDetail />
            <SideContent />
            <Sales />
        </>
    )
}

export default Home;