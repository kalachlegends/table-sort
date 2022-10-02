import mongoose from "mongoose";


const TableShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
})
export default mongoose.model("Table", TableShema)