



# 09-React-Router-6



## 第一章 课程代码

Git仓库地址: https://github.com/hemiahwu/09-react-router-v6

百度网盘链接: https://pan.baidu.com/s/13F-M9bB9dT8r9vizhXtrdw?pwd=ha3x 提取码: ha3x



课程答疑微信: 

web1024b

### 1. 创建项目

* react-router-new

``````bash
npm create vite@latest .
``````

* 清除App.css

### 2. App.tsx

`````tsx
import React from "react";

export default function App() {
  return <div className="app">Hello React Router</div>;
}
`````

### 3. 安装react-router

`````bash
npm install react-router-dom
`````

### 4. App.tsx

`````tsx
import React from "react";

// 1.引入模块
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    // 2. 包裹
    <BrowserRouter>
      <div className="app">Hello React Router</div>
    </BrowserRouter>
  );
}
`````



## 第二章 实现路由

### 1. App.tsx

``````tsx
import React from "react";

// 1.引入模块
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    // 2. 包裹
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<div>首页</div>}></Route>
          <Route path="/course" element={<div>课程</div>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
``````

### 2. 创建pages/Home.tsx  Course.tsx

* Home.tsx

``````tsx
import React from "react";

export default function Home() {
  return <div>这里是主页</div>;
}
``````

* Course.tsx

`````tsx
import React from "react";

export default function Course() {
  return <div>这里是课程页面</div>;
}
`````

### 3. 调整路由跳转 -> 组件

``````tsx
<BrowserRouter>
  <main>
    <Routes>
      {/* 调整 */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
    </Routes>
  </main>
</BrowserRouter>
``````



## 第三章 导航 Link和NavLink

### 1. App.tsx

``````tsx
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
<BrowserRouter>
  {/* 加入导航 */}
  <header>
    <nav>
      <h1>导航</h1>
      <Link to="/">主页</Link> | <NavLink to="/course">课程</NavLink>
    </nav>
  </header>

  ...
</BrowserRouter>
``````



## 第四章  createBrowserRouter

### 1. App.tsx

* 删掉BrowserRouter
* 注释导航

``````tsx
export default function App() {
  return (
    // 2. 包裹

    // {/* 加入导航 */}
    // <header>
    //   <nav>
    //     <h1>导航</h1>
    //     <Link to="/">主页</Link> | <NavLink to="/course">课程</NavLink>
    //   </nav>
    // </header>

    <main>
      <Routes>
        {/* 调整 */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Routes>
    </main>
  );
}
``````

### 2. 使用createBrowserRouter

* App.tsx

`````tsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      {/* 调整 */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
    </Routes>
  )
);

export default function App() {
  return (
    // <RouterProvider router={router} /> 是提供器组件，作用是将一个已经创建好的路由对象(router)传递给子组件，以便子组件可以访问到路由相关的信息。具体来说，当我们使用 react-router 来进行页面路由时，我们需要创建一个路由对象来管理路由的状态和转换。<RouterProvider> 组件的作用就是将这个路由对象注入到整个应用程序中，以便我们在需要时可以访问它
    <RouterProvider router={router} />
  );
}
`````

### 3. 解决报错

``````tsx
const router = createBrowserRouter(
  createRoutesFromElements(
    {/* 将Routes 改成 Route */}
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
    </Route>
  )
);
``````

### 4. App.tsx导航问题

`````tsx
export default function App() {
  return (
    <>
      {/* 因为该导航并不在BrowserRouter的包裹下,所以无效且报错 */}
      <header>
        <nav>
          <h1>导航</h1>

          <NavLink to="/">主页</NavLink>
          <NavLink to="/course">课程</NavLink>
        </nav>
      </header>
      
      <RouterProvider router={router} />
    </>
  );
}
`````

### 5. App.tsx解决导航问题

``````tsx
const router = createBrowserRouter(
  createRoutesFromElements(
    // 设置根路由
    <Route path="/" element={<RootLayout />}>
      {/* 调整默认路由 index */}
      <Route index element={<Home />}></Route>
      <Route path="/course" element={<Course />}></Route>
    </Route>
  )
);
``````

### 6. 创建layouts/RootLayout.tsx

* 导航

`````tsx
import { NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>导航</h1>

          <ul>
            <li>
              <NavLink to="/">主页</NavLink>
            </li>
            <li>
              <NavLink to="/course">课程</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
`````

* 组件容器

`````tsx
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>导航</h1>

          <ul>
            <li>
              <NavLink to="/">主页</NavLink>
            </li>
            <li>
              <NavLink to="/course">课程</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
`````

### 7. index.css配置基本样式

`````css
.root-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

header {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

nav h1 {
  margin: 0;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin: 0 10px;
}

nav a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
}

nav a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

nav a.active {
  background-color: #000;
  color: #fff;
}

`````



## 第五章 子级路由

### 1. App.tsx

`````tsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      ...
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" /> {/* /help/faq */}
        <Route path="contact" /> {/* /help/contact */}
      </Route>
      
    </Route>
  )
);
`````

### 2. RootLayout.tsx追加导航

`````tsx
<li>
  <NavLink to="/help">求助</NavLink>
</li>
`````

### 3. 创建layouts/HelpLayout.tsx

``````tsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>有问题找老吴</h2>

      <nav>
        <ul>
          <li>
            <NavLink to="faq">常见问题</NavLink>
          </li>
          <li>
            <NavLink to="contact">联系老吴</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
``````

### 4. pages/help/Faq | Contact.tsx

* Faq.tsx

``````tsx
import React from "react";

export default function Faq() {
  return <div>常见的问题, 包括.....</div>;
}
``````

* Contact.tsx

`````tsx
export default function Contact() {
  return (
    <div className="contact">
      <h3>联系老吴</h3>
      <form>
        <label>
          <span>你的邮箱:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>问题描述:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>提交</button>
      </form>
    </div>
  );
}
`````

### 5.App.tsx

`````tsx
<Route path="help" element={<HelpLayout />}>
  <Route path="faq" element={<Faq />} /> {/* /help/faq */}
  <Route path="contact" element={<Contact />} /> {/* /help/contact */}
</Route>
`````



## 第六章 通配符 *

### 1. App.tsx

`````tsx
<Route path="*" element={<NotFound />} />
`````

### 2. 创建pages/NotFound.tsx

``````tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>页面找不到!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        cupiditate ad nostrum doloribus iste tempora quisquam excepturi
        repellat, fugit cumque dolore magni possimus inventore neque provident!
        Sunt, quo eos?
      </p>

      <p>
        回到 <Link to="/">首页</Link>.
      </p>
    </div>
  );
}
``````



## 第七章 布局课程组件

### 2. Course.tsx

`````tsx
import React, { useEffect} from "react";

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
  const [items, setItems] = useState<>([]);
  
  useEffect(() => {
    axios.get("https://www.thenewstep.cn/backend/8015/api/data").then((res) => {
      console.log(res.data);
    });
  });
  
  useEffect(() => {
    axios.get("https://www.thenewstep.cn/backend/8015/api/data").then((res) => {
      setItems(res.data);
    });
  });
  
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
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
`````

### 3. index.css

`````css
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1280px;
  display: grid;
  justify-items: center;
  gap: 3rem 2rem;
  margin-top: 2rem;
}

.menu-item {
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;
  position: relative;
  overflow: hidden;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  margin-top: 2rem;
}

.menu-item:hover .photo {
  transform: scale(1.1);
}

.photo {
  width: 100%;
  display: block;
  transition: all 0.3s linear;
}

.item-info {
  padding: 1rem;
}

.item-info header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.item-info h4 {
  margin-bottom: 0;
  font-size: 1.5rem;
}

.item-info .price {
  color: #d02f2f;
}

.item-text {
  margin-bottom: 1rem;
  color: #6b6b6b;
  font-size: 0.9rem;
}

.btn {
  display: inline-block;
  background: #d02f2f;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s linear;
  text-decoration: none;
  margin-top: 1rem;
  text-align: center;
}

.btn:hover {
  background: #800000;
}

@media screen and (min-width: 768px) {
  .section-center {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 992px) {
  .section-center {
    grid-template-columns: repeat(3, 1fr);
  }
}

.back-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
}
`````

## 第八章. 路由参数跳转

### 1. App.tsx

`````tsx
<Route path="/course" element={<Course />}></Route>

<Route path="/course/:id" element={<CourseDetail />}></Route>
`````

### 2. pages/CourseDetails.tsx

`````tsx
import React from 'react'

export default function CourseDetail() {
  return (
    <div>
      Hello
    </div>
  )
}
`````

### 3. 商品跳转 -> 详情

``````tsx
 <Link to={`/course/${id}`}>
            <article key={id} className="menu-item">
``````



### 4. 布局详情

* 获取id

`````tsx
const { id } = useParams();

import { useParams } from "react-router-dom";
`````

* 根据id请求数据

`````tsx
const [course, setCourse] = useState<Course>();
`````

`````tsx
interface Course {
  id: number;
  img: string;
  link: string;
  price: string;
  title: string;
  desc: string;
  category: string;
}
`````

* 请求

`````tsx
import axios from "axios";
`````

`````tsx
useEffect(() => {
    axios
      .get("https://www.thenewstep.cn/backend/8015/api/data/" + id)
      .then((res) => {
        setCourse(res.data);
      });
  }, []);
`````

* 渲染

``````tsx
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
``````



## 第九章 loader

### 1. Course.tsx

``````tsx
export const courseLoader = async () => {
  const res = await axios.get(
    "https://www.thenewstep.cn/backend/8015/api/data"
  );
  return res.data;
};
``````



### 2. App.tsx

````tsx
<Route path="/course" element={<Course />} loader={courseLoader}></Route>
````



### 3. Course.tsx

``````tsx
export default function Course() {
  // 加载数据
  const items = useLoaderData() as Course[];

  return (
    <div className="section-center">
      {items.map((course) => {
        const { id, title, img, desc, price } = course;
        return (
          // 设置id
          <Link key={id} to={`/course/${id}`}>
            ....
          </Link>
        );
      })}
    </div>
  );
}
``````



### 4. CourseDetail.tsx

`````tsx
export default function CourseDetail() {
  // 1. 获取
  const course = useLoaderData() as Course;

  return (
    <div className="section-center">
      ....
    </div>
  );
}

// 2. loader
export const courseDetailLoader = async ({ params }: any) => {
  const { id } = params as { id: number };
  console.log(id);
  const res = await axios.get(
    "https://www.thenewstep.cn/backend/8015/api/data/" + id
  );
  return res.data;
};
`````

### 5. App.tsx

`````tsx
     path="/course/:id"
    element={<CourseDetail />}
    loader={courseDetailLoader}
  ></Route>
`````



## 第十章 routeError

### 1. CourseDetail.tsx

`````tsx
export const courseDetailLoader = async ({ params }: any) => {
 ...

  console.log(res);

  if (res.data == "") {
    throw Error("找不到该课程");
  }
  return res.data;
};
`````

### 2. App.tsx

`````tsx
<Route
  ...
  errorElement={<ErrorPage />}
></Route>
`````

### 3. ErrorPage.tsx

`````tsx
import React from "react";
import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  message: string;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.log(error);
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">回到首页</Link>
    </div>
  );
}
`````



## 第十一章 useLocation 面包屑

### 1.components/Breadcrumbs.tsx

`````tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  // help/contact
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
`````

### 2. RootLayout.tsx

`````tsx
</nav>
<Breadcrumbs />
`````

