import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDeatailsCard from '../components/NewsDeatailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data=useLoaderData()
    const {id}=useParams()
    const[news,setNews]=useState({})
    // console.log(data,id)

    useEffect(()=>{
        const newsDetails=data.find(singleNews=>singleNews.id==id)
        setNews(newsDetails);
    },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
<section className='font-bold mb-5 col-span-9'>
    <h2 className='mb-5'>News Details</h2>
    <NewsDeatailsCard key={news.id} news={news}></NewsDeatailsCard>
</section>
<aside className='col-span-3'>
    <RightAside></RightAside>
</aside>
            </main>
        </div>
    );
};

export default NewsDetails;