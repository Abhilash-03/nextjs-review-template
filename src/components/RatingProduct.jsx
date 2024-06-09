"use client";
import ReactStars from 'react-stars';
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from 'react';

const RatingProduct = ({title, subHeading, option}) => {
    const [likeDislike, setLikeDislike] = useState('like');
    const [select, setSelect] = useState('clean');

  return (
    <div className=" bg-gray-50 px-4 py-6 my-3 mx-3 rounded-lg shadow-lg">
      <h1 className="lg:text-2xl text-xl font-bold">{title}</h1>
      <p className="text-gray-600 pb-1">{subHeading}</p>
      <div className="icon"> 
        {
            option === 'star' && (
                <ReactStars count={5} size={42} color2={'#ffd700'} className='text-2xl' />

            )
        }
        {
            option === 'yesNo' && (
                <div className='flex space-x-7 mt-3'>
                   <p className={`flex text-lg ${likeDislike === 'dislike' && 'text-green-500'}`}><AiFillDislike className={`text-3xl ${likeDislike === 'dislike' ? 'text-green-500' : 'text-gray-400'} cursor-pointer`} onClick={() => setLikeDislike('dislike')} /> No</p> 
                    <p className={`flex text-lg ${likeDislike === 'like' && 'text-green-500'}`}><AiFillLike className={`text-3xl ${likeDislike === 'like' ? 'text-green-500' : 'text-gray-400'} cursor-pointer`} onClick={() => setLikeDislike('like')} /> Yes</p>
                </div>
            )
        }
        {
            option === 'select' && (
                <div className='flex items-center mt-3 flex-wrap'>
                    <p className={`px-3 py-2 h-auto mt-1 rounded-full  cursor-pointer  font-semibold ${select === 'good'? 'bg-emerald-200 text-black border-2 border-green-500' : 'bg-gray-200 text-gray-600'}`} onClick={() => setSelect('good')}>Good</p>
                    <p className={`px-3 py-2 mx-2 h-auto mt-1 rounded-full  cursor-pointer  font-semibold ${select === 'great'? 'bg-emerald-200 text-black border-2 border-green-500' : 'bg-gray-200 text-gray-600'}`} onClick={() => setSelect('great')}>Great</p>
                    <p className={`px-3 py-2 h-auto mt-1 rounded-full  cursor-pointer  font-semibold ${select === 'excellent'? 'bg-emerald-200 text-black border-2 border-green-500' : 'bg-gray-200 text-gray-600'}`} onClick={() => setSelect('excellent')}>Excellent</p>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default RatingProduct
