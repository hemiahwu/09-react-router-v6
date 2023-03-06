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
