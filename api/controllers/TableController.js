import { validationResult } from "express-validator";
import TableShema from '../models/table.js'


export const create = async (req, res) => {
    try {
        const erorr = validationResult(req)
        if (!erorr.isEmpty()) {
            return res.status(400).json(erorr.array())
        }

        const doc = new TableShema({
            title: req.body.title,
            quantity: req.body.sub_title,
            distance: req.body.html_text,
        })
        const post = await doc.save();
        return res.json(post)

    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: 'Не удалось создать колонку'
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const { page, size } = req.query

        const posts = await TableShema.find({

        }, null, {
            limit: size,
            skip: page * size,
        })
        const count = await TableShema.count({
        })

        res.header("total_count", count)
        return res.json(
            posts
        )
    } catch (err) {
        res.status(500).json({
            message: 'Error'
        })
    }
}

