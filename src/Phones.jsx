import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>Total: {phones.length}</h2>
            <ul style={{ display: "flex", gap: "8px", flexWrap: "wrap", listStyle: "none" }}>
                {
                    phones.map(phone => (
                        <Link style={{ padding: "16px", background: "white", borderRadius: "6px" }} key={phone.id} to={`/phone/${phone.id}`}><li >{phone.name}</li></Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default Phones;