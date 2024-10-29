const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    courseName: {
        type: String,
        required: true,
        trim: true,
    },

    courseDescription: {
        type: String,
        required: true,
        trim: true,
    },

    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    whatYouWillLearn: {
        type: String,
        required: true,
        trim: true,
    },

    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section",
        }
    ],

    ratingAndReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RatingAndReviews",
        }
    ],

    price: {
        type: Number,
    },

    thumbnail: {
        type: String,
    },

    tags: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
    },

    studentEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    ],

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },

    instructions: {
		type: String,
	},

	status: {
		type: String,
		enum: ["Draft", "Published"],
	},

    createdAt: {
		type: Date,
		default: Date.now
	},

});

module.exports = mongoose.model["Course", courseSchema];