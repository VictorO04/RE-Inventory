import data from "../models/data.js";
const {mainChar} = data;

const getAllMainChar = (req, res) => {
    let result = mainChar

    res.status(200).json({
        "total": result.length,
        "data": result
    });
}

export {getAllMainChar}