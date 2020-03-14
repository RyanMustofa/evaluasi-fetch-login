import React from "react";

const Props = ({ data,onClick }) => {
    return (
        <div class="container">
                <div class="col s12 m7">
                    <div class="card medium hoverable">
                        <div class="card-image">
                            <img class="responsive-image"  src={data.thumbnail} />
                            <span class="card-title">{data.title}</span>
                        </div>
                        <div class="card-content">
                            <p>
                                {data.description}
                            </p>
                        <p className="left-align indigo-text">{data.pubDate}</p>
                        </div>
                        <div class="card-action">
                            <a  onClick={onClick} >View</a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Props;
