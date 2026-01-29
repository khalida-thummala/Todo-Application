import { TodoModel } from '../models/todoModel.js';

export const getTodos = (req, res) => {
    try {
        const todos = TodoModel.findAll();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const getTodoById = (req, res) => {
    try {
        const { id } = req.params;
        const todo = TodoModel.findById(id);

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const createTodo = (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }

        const newTodo = TodoModel.create({ title, description });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const updateTodo = (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const updatedTodo = TodoModel.update(id, { title, description, completed });

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

export const deleteTodo = (req, res) => {
    try {
        const { id } = req.params;
        const isDeleted = TodoModel.delete(id);

        if (!isDeleted) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
