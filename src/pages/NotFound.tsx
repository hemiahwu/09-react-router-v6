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
