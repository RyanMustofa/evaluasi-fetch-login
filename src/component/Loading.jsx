import React from "react";

const Loading = ({ loading, onClick }) => {
    if (loading === false) {
        return <button class="btn disabled">LOADING...</button>;
    }
    return (
        <button
            class="btn waves-effect waves-light"
            type="submit"
            onClick={onClick}
        >
            Login
            <i class="material-icons right">send</i>
        </button>
    );
};

export default Loading;
