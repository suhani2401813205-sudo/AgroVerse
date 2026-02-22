// Show Crop Selection Page
exports.showCropSelection = (req, res) => {
    res.render("crop/crop-selection");
};

// Handle Form Submission
exports.getRecommendation = (req, res) => {

    const {
        season,
        soilType,
        waterLevel,
        temperature,
        locationType,
        landSize
    } = req.body;

    // Temporary Recommendation Logic (You can improve later)
    let recommendedCrop = "Wheat";

    if (season === "Kharif" && waterLevel === "High") {
        recommendedCrop = "Rice";
    } else if (season === "Rabi" && soilType === "Black") {
        recommendedCrop = "Wheat";
    } else if (season === "Zaid") {
        recommendedCrop = "Watermelon";
    }

    res.render("crop/crop-result", {
        season,
        soilType,
        waterLevel,
        temperature,
        locationType,
        landSize,
        recommendedCrop
    });
};