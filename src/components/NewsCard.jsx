import React from "react";
import { CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Author Info */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3 ">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaRegBookmark />
          <CiShare2 />
        </div>
      </div>
      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm  border-b border-gray-300 pb-4">
          {details.slice(0, 180)}...
          <span className="text-blue-500 cursor-pointer"> Read More</span>
        </p>

        {/* Rating and Views */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating.number)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-1 text-gray-700">{rating.number}</span>
          </div>

          <div className="flex items-center gap-1">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
