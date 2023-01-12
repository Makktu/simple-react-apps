import "./ExtraButton.css";

const ExtraButton = (props) => {
    console.log(">>>", props);
    return <button className="extra-button">{props.arbitrary}</button>;
};

export default ExtraButton;
