const mongoose = require("mongoose");

const SimulationSchema = mongoose.Schema({
    tiltel: String,
    description: String,
    parameters: {
        type: Array,
    },
});

module.exports = mongoose.model("Simulation", SimulationSchema);
