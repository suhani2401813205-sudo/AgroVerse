// Show Signup Page
exports.showSignup = (req, res) => {
    res.render("auth/signup");
};

// Handle Signup
exports.signupUser = (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.send("Passwords do not match");
    }

    console.log("User Registered:", name, email);

    res.redirect("/auth/login");
};

// Show Login Page
exports.showLogin = (req, res) => {
    res.render("auth/login");
};

// Handle Login
exports.loginUser = (req, res) => {
    const { email, password } = req.body;

    console.log("User Login:", email);

    res.redirect("/dashboard");
};
