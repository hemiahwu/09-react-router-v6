import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
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
  const course = useLoaderData() as Course;

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

export const courseDetailLoader = async ({ params }: any) => {
  const { id } = params as { id: number };
  const res = await axios.get(
    "https://www.thenewstep.cn/backend/8015/api/data/" + id
  );

  if (res.data == "") {
    throw Error("找不到该课程");
  }

  return res.data;
};
