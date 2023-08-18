import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } =
    props;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <span
          className="position-absolute top-0 start- translate-middle badge rounded-pill bg-danger"
          style={{ left: "80%", zIndex: "1" }}
        >
          {source}
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://www.livemint.com/lm-img/img/2023/06/10/600x338/vishal_garg_1639022689279_1686400821678.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn -sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
