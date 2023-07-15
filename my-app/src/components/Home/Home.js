import React from 'react';
import Slide from '../Slide';
import Service from '../Service';
import CardList from '../CardList';
import CardDetail from '../CardDetail';
import SideContent from '../SideContent';
import Sales from '../Sales';



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