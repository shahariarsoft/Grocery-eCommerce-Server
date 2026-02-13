import Address from "../models/address.model.js";


// add address :/api/address/add
export const addAddress = async (req, res) => {
    try {
        const userId = req.user;
        const { address } = req.body;

        await Address.create({
            ...address,
            userId,
        });
        res.status(201).json({
            message: "Address added successfully",
            success: true,
        })
    } catch (error) {
        console.error("Error adding address:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};