// import { RequestHandler, Request, Response, NextFunction } from 'express'

// export const validate: RequestHandler =
//     (schema: any) =>
//     async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             await schema.parseAsync({
//                 body: req.body,
//                 query: req.query,
//                 params: req.params,
//             })
//             return next()
//         } catch (error) {
//             return res.status(400).json(error)
//         }
//     }
