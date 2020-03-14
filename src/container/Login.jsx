import React from "react";
import Loading from "../component/Loading";
import axios from "axios";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            cek: false
        };
    }
    _isMounted = false;
    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value
            },
            () => console.log(this.state)
        );
    };
    componentWillUnmount() {
        this._isMounted = false;
    }
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        axios
            .post(
                "https://penjualanapp-api.herokuapp.com/api/v1/auth/login",
                data
            )
            .then(res => {
                if (this._isMounted) {
                    this.setState({ loading: true });
                }
                this.setState({
                    cek: true
                });
                swal({
                    title: "Success Loading!",
                    text: "success you have successfully logged in",
                    icon: "success",
                    timer: 2000,
                    button: false
                });
                localStorage.setItem("api_token", res.data.data.token);
                console.log(res);
                this.props.history.push("/dashboard");
            })
            .catch(err => {
                swal({
                    title: "Error!",
                    text:
                        "sorry you failed to log in please check your EMAIL or PASSWORD or CHECK YOUR INTERNET",
                    icon: "error",
                    timer: 2000,
                    button: false
                });
                this.setState({
                    loading: true
                });
            });
        this.setState({
            loading: false
        });
    };
    render() {
        if(localStorage.getItem('api_token')){
            return <Redirect to="/dashboard" />
        }
        return (
            <div>
                <div className="section"></div>
                <center>
                    <div className="section"></div>
                    <h5 className="center-align white-text">
                        {this.state.message}
                    </h5>
                    <div class="container">
                        <div
                            className="grey lighten-4 row"
                            style={{
                                display: "inline-block",
                                padding: " 32px 48px 32px 48px",
                                border: "1px solid #EEE"
                            }}
                        >
                            <h5 class="center-align indigo-text">Form Login</h5>
                            <form class="col s12" onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">
                                            mail
                                        </i>
                                        <input
                                            id="icon_prefix"
                                            name="username"
                                            type="text"
                                            class="validate"
                                            onChange={this.handleChange}
                                        />
                                        <label for="icon_prefix">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="input-field col s12">
                                        <i class="material-icons prefix">
                                            https
                                        </i>
                                        <input
                                            id="icon_telephone"
                                            name="password"
                                            onChange={this.handleChange}
                                            type="password"
                                            class="validate"
                                        />
                                        <label for="icon_telephone">
                                            Password
                                        </label>
                                    </div>
                                </div>
                                <center>
                                    <Loading
                                        loading={this.state.loading}
                                        onClick={this.handleSubmit}
                                    />
                                </center>
                            </form>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default Login;
