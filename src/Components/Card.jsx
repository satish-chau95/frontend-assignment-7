import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { id, book, author } = data;
  const { img: bookImg, title, about } = book;
  const { img: authorImg, name, pub } = author;

  const defaultBookImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";
  const defaultAuthorImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZV0WxURh4QRU50JJMkKrbIC2Enn77UUqOwKbRb8R-wopOA7Tm2M1jFuVthM3TDyvsWY&usqp=CAU";

  return (
    <div className="w-96 mb-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <Link to={`/dashboard/details/${id}`} state={{ data }} className="no-underline text-gray-900">
          <div className="p-4 flex flex-col justify-between">
            <div>
              <img
                src={bookImg || defaultBookImgUrl}
                className="w-full h-80 object-cover mb-4 rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultBookImgUrl;
                }}
                alt={title || "Book Image"}
              />
              <h1 className="text-lg font-bold italic underline mb-2">
                {title || "Title Not Available"}
              </h1>
              <p className="text-gray-700 text-sm">{about}</p>
            </div>
            <div className="flex items-center mt-4">
              <img
                src={authorImg || defaultAuthorImgUrl}
                className="w-12 h-12 object-cover rounded-full border-2 border-gray-200 mr-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = defaultAuthorImgUrl;
                }}
                alt={name || "Author Image"}
              />
              <div>
                <p className="text-sm font-semibold">{name || "Author Name"}</p>
                <small className="text-gray-500">{pub}</small>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
