import React from "react";
import axios from "axios";
import "./detail.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            datas: []
        };
    }
    componentDidMount() {
        const title = this.props.match.params.i;
        axios
            .get(
                "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F"
            )
            .then(res => {
                return res.data;
            })
            .then(data =>
                this.setState({
                    data: data.items[title],
                    loading: true
                })
            );
        this.setState({
            loading: false
        });
        console.log(title);
    }
    render() {
        
        console.log(this.props)
        const { data } = this.state;
        if (this.state.loading == false) {
            return (
                <center>
                    <div className="section"></div>
                    <div className="section"></div>
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                    <h4>LOADING...</h4>
                </center>
            );
        }
        return (
            <div>
                <div class="navbar-fixed">
                    <nav>
                        <div class="nav-wrapper">
                            <div className="container">
                                <a class="brand-logo center">DETIK NEWS</a>
                                <Link
                                    to="/dashboard"
                                    className="right btn waves-effect waves-light red"
                                    style={{ margin: "10px auto" }}
                                >
                                    Back
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>

                <div>
                    <div className="container">
                        <div className="Header1">
                            <h4>{data.title}</h4>
                        </div>
                        <div className="authoor1">
                            <p>{data.pubDate}</p>
                        </div>
                        <center>
                            <div classNmae="layout-gambar1">
                                <img
                                    src={data.thumbnail}
                                    className="gambar-l"
                                />
                            </div>
                        </center>
                        <div>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
