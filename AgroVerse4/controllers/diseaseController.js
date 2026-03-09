exports.detectDisease = (req, res) => {

  const cropType = req.body.cropType;

  // temporary prediction
  let diseaseName = "Leaf Blast";
  let severity = "Medium";
  let cause = "Fungal Infection";
  let treatment = "Use recommended fungicide spray.";

  res.render("disease/disease-Result", {
    cropType,
    diseaseName,
    severity,
    cause,
    treatment
  });

};