import express from 'express'


const router = express.Router()

router.get("spaces", async(req, res, next) => {
  res.json({message: "hello world"})
})

  

export default router