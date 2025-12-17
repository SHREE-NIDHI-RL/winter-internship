const bcrypt = require('bcrypt');
const signup_schema = require('./SignupSchema');

const loginUser = async (email, password) => {
    try {
        const user = await signup_schema.findOne({ email });
        
        if (!user) {
            return { success: false, message: "User not found" };
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (isPasswordValid) {
            return { 
                success: true, 
                message: "Login successful", 
                data: { email: user.email, username: user.username } 
            };
        } else {
            return { success: false, message: "Invalid password" };
        }
    } catch (error) {
        return { success: false, message: "Server error", error: error.message };
    }
};

module.exports = { loginUser };