import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const [items, setItems] = useState<Course[]>([]);

  useEffect(() => {
    axios.get("https://www.thenewstep.cn/backend/8015/api/data").then((res) => {
      setItems(res.data);
    });
  });
  return (
    <div className="section-center">
      {items.map((course) => {
        const { id, title, img, desc, price } = course;
        return (
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
        );
      })}
    </div>
  );
}
