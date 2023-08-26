import React from 'react';
import Slide from '../Slide/Slide';
import Service from '../Service/Service';
import CardList from '../CardList/CardList';
import CardDetail from '../CardDetail/CardDetail';
import SideContent from '../SlideContent/SideContent';
import Sales from '../Sales/Sales';



const Home = () => {
    return (
        <>
            <Slide />
            <Service />
            <CardList></CardList>
            <CardDetail />
            <SideContent />
            <Sales />
        </>
    )
}

export default Home;