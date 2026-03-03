const Dashboard = () => {
    const plantpicStyle = {
        display: 'none'
    };

    return (
        <>
            <div>
                <h1>Dashboard</h1>
                <label htmlFor="plantpic">Plant Picture</label>
                <input id="plantpic" type="file" capture="environment" accept="image/*" style={plantpicStyle} onChange={(e) => identifyPlant(e.target.files[0])}/>
            </div>
        </>
    );

}

const identifyPlant = async (image) => {
    const formData = new FormData();
    formData.append('images', image);
    formData.append('organs', 'auto');
    
    const response = await fetch(
        `https://api.plant.id/v2/identify?api_key=${import.meta.env.VITE_PLANTNET_KEY}`,
        { method: 'POST', body: formData }
    );
    
    console.log(response.json());
    return response.json();
};

export default Dashboard;