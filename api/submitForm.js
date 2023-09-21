const axios = require("axios");

module.exports = async (req, res) => {
if (req.method !== "POST") {
    return res.status(405).end();
}

const { name, email, message } = req.body;

const data = {
    fields: {
    "Name": Name,
    "Email": Email,
    "Message": Message,
    },
};

try {
    const response = await axios.post(
    `https://api.airtable.com/v0/app8Uiu7pTXVHT9eJ/Contact%20Form`,
    data,
    {
        headers: {
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
        },
    }
    );
    res.status(200).json({ id: response.data.id });
} catch (error) {
    console.error("Error inserting record: ", error);
    res.status(500).json({ error: `Failed to insert record: ${error.message}` });
}
};
