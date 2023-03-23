import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

export default function CourseDetail() {
  const [course, setCourse] = useState<Course>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://www.thenewstep.cn/backend/8015/api/data/" + id)
      .then((res) => {
        setCourse(res.data);
      });
  }, []);

  return (
    <div className="section-center">
      {course && (
        <>
          <div className="item-info">
            <Link to="/course" className="back-button">
              返回
            </Link>
            <h4>课程标题: {course.title}</h4>

            <p className="item-text">课程描述: {course.desc}</p>
            <Link className="btn" to={course.link}>
              观看课程
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
