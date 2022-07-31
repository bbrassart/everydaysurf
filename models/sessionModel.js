import { Schema, model, models } from "mongoose";

const sessionSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Session = models.Session || model("Session", sessionSchema);

export default Session;
