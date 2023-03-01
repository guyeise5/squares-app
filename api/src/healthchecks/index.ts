import Router from 'express'

export const router = Router()
router.get("/ready", (req,res) => res.status(200).json({ok: 1}))
router.get("/live", (req,res) => res.status(200).json({ok: 1}))