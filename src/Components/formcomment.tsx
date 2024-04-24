import { useState } from "react";

export default function Formcomment() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="mt-5 d-flex justify-content-center">
      <form className="w-50 d-flex flex-column align-items-center">
        <h4 className="mt-5 mb-5 px-1 py-1 text-white bg-secondary">نظری وجود ندارد!</h4>
        <div className="mb-3 w-100">
          <input
            className="form-control"
            type="text"
            placeholder="نام خود را وارد کنید..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={2}
            maxLength={40}
          />
          {username.length < 2 && (
            <p className="text-sm text-danger">حداقل دو حرف وارد کنید</p>
          )}
          {username.length === 40 && (
            <p className="text-sm text-danger">حداکثر چهل حرف وارد کنید</p>
          )}
        </div>
        <div className="mb-3 w-100">
          <textarea
            className="form-control"
            placeholder="نظر خود را وارد کنید..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            minLength={2}
            maxLength={500}
          />
          {comment.length < 2 && (
            <p className="text-sm text-danger">حداقل دو حرف وارد کنید</p>
          )}
          {comment.length === 500 && (
            <p className="text-sm text-danger">حداکثر پانصد حرف وارد کنید</p>
          )}
        </div>
        <button style={{backgroundColor: "#bc4cf5" }} className="btn btn-primary w-50" type="submit">
          ارسال نظر
        </button>
      </form>
    </div>
  );
}