import express from 'express';
import prisma from './lib/prisma.js';
const app = express();
app.get('/', async (req, res) => {
    const data = await prisma.user.findMany();
    res.json({
        data
    });
});
app.post('/', async (req, res) => {
    await prisma.user.create({
        data: {
            name: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    res.json({
        "message": " User Created",
    });
});
app.listen(3000, () => {
    console.log(" server running on port 3000 ");
});
//# sourceMappingURL=index.js.map