const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required'],
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

module.exports =
    mongoose.models.Activity || mongoose.model('Activity', activitySchema);
