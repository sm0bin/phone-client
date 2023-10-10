import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const phone = useLoaderData();

    const { name, price, description, image } = phone;
    return (
        <div style={{ width: "512px", padding: "16px", borderRadius: "6px", border: "1px solid blue", marginTop: "20px" }}>
            <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src={image} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}</h3>
            <p style={{ textAlign: "left" }}>{description}</p>

        </div>
    );
};

export default Phone;