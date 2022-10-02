import express from 'express';

import mongoose from 'mongoose';

import cors from 'cors'
import TableShema from './models/table.js'
import * as TableController from './controllers/TableController.js'
mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => {
        add_test_databes()
        console.log("DB OK")
    })
    .catch(() => "DB erorr")
const app = express()


app.use(express.json())
const corsOptions = {
    exposedHeaders: 'total_count',
};

app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send("Hello World")
});
app.get('/api/tables', TableController.getAll)

async function add_columns_to_databes(title, quantity, distance) {
    const doc = new TableShema({
        title: title,
        quantity: quantity,
        distance: distance,
    })
    await doc.save()
}
// TEST VALUES FOR DATABASE
function add_test_databes() {
    add_columns_to_databes("Помидоры", 120, 123)
    add_columns_to_databes("Огурцы", 30, 123)
    add_columns_to_databes("Свекла", 11, 123.3)
    add_columns_to_databes("Картофель", 120, 123)
    add_columns_to_databes("Мандарин", 55, 11)

    add_columns_to_databes("Яблоки", 55, 312)
    add_columns_to_databes("Мясо", 123, 312)
    add_columns_to_databes("Конина", 55, 312)
    add_columns_to_databes("Яйца", 123, 312)

    add_columns_to_databes("Помидоры", 120, 123)
    add_columns_to_databes("Огурцы", 30, 123)
    add_columns_to_databes("Свекла", 11, 123.3)
    add_columns_to_databes("Картофель", 120, 123)
    add_columns_to_databes("Мандарин", 55, 11)

    add_columns_to_databes("Яблоки", 55, 312)
    add_columns_to_databes("Мясо", 123, 312)
    add_columns_to_databes("Конина", 55, 312)
    add_columns_to_databes("Яйца", 123, 312)

    add_columns_to_databes("Помидоры", 120, 123)
    add_columns_to_databes("Огурцы", 30, 123)
    add_columns_to_databes("Свекла", 11, 123.3)
    add_columns_to_databes("Картофель", 120, 123)
    add_columns_to_databes("Мандарин", 55, 11)

    add_columns_to_databes("Яблоки", 55, 312)
    add_columns_to_databes("Мясо", 123, 312)
    add_columns_to_databes("Конина", 55, 312)
    add_columns_to_databes("Яйца", 123, 312)


    add_columns_to_databes("Помидоры", 120, 123)
    add_columns_to_databes("Огурцы", 30, 123)
    add_columns_to_databes("Свекла", 11, 123.3)
    add_columns_to_databes("Картофель", 120, 123)
    add_columns_to_databes("Мандарин", 55, 11)

    add_columns_to_databes("Яблоки", 55, 312)
    add_columns_to_databes("Мясо", 123, 312)
    add_columns_to_databes("Конина", 55, 312)
    add_columns_to_databes("Яйца", 123, 312)

    add_columns_to_databes("Голова", 11, 12)
    add_columns_to_databes("Яйца", 33, 22)

    add_columns_to_databes("КУРТ", 55, 312)
    add_columns_to_databes("Яйца", 123, 312)

    add_columns_to_databes("Колбаса", 55, 312)
    add_columns_to_databes("Яйца", 123, 312)

    add_columns_to_databes("Яблоки", 55, 312)
    add_columns_to_databes("творог", 123, 312)

    add_columns_to_databes("Колбаскаа", 312, 1)
    add_columns_to_databes("Яйца", 123, 312)

    add_columns_to_databes("Яблоки", 55, 312)
    add_columns_to_databes("Яйца", 123, 312)

    add_columns_to_databes("Яблоки", 55, 312)
    add_columns_to_databes("Молоко", 1111, 4)

}
add_test_databes()
app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server ok')
})