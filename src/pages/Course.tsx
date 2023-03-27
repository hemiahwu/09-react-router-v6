import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

interface Course {
  id: number;
  img: string;
  link: string;
  price: string;
  title: string;
  desc: string;
  category: string;
}

export default function Course() {
  const items = useLoaderData() as Course[];
  return (
    <div className="section-center">
      {items.map((course) => {
        const { id, title, img, desc, price } = course;
        return (
          <Link key={id} to={`/course/${id}`}>
            <article key={id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}

export const courseLoader = async () => {
  const res = await axios.get(
    "https://www.thenewstep.cn/backend/8015/api/data"
  );

  return res.data;
};
