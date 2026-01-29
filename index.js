import express from 'express';
import todoRoutes from './src/routes/todoRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Routes
app.use('/todos', todoRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
