//  Basic try-catch
try {
    // Code that might cause error
    const result = 10 / 0;
    console.log(result); // Infinity (not an error in JS!)

    // This WILL throw error
    const user = null;
    console.log(user.name); // TypeError!

} catch (error) {
    console.log("Error caughts!");
    console.log("Message:", error.message);
    console.log("Type:", error.name);
} finally {
    console.log("This always runs, error or not!");
}

// different error types
try {
    undeclaredVariable; // ReferenceError
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Variable not found:", error.message);
    } else if (error instanceof TypeError) {
        console.log("Wrong type:", error.message);
    } else {
        console.log("Unknown error:", error.message);
    }
}

//  Throwing custom errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Both arguments must be numbers!");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));  // 5
    console.log(divide(10, 0));  // throws error!
} catch (error) {
    console.error("Error:", error.message);
}

//  Custom Error Classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative", "age");
    }
    if (age > 150) {
        throw new ValidationError("Age is unrealistically high", "age");
    }
    return true;
}

try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed on field: ${error.field}`);
        console.log(`Message: ${error.message}`);
    }
}

//  Try-catch with async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);

        if (!response.ok) {
            throw new NetworkError(
                "Failed to fetch user", 
                response.status
            );
        }

        const data = await response.json();
        return data;

    } catch (error) {
        if (error instanceof NetworkError) {
            console.error(`Network error ${error.statusCode}: ${error.message}`);
        } else {
            console.error("Unexpected error:", error.message);
        }
        return null;
    } finally {
        console.log("Fetch attempt completed");
    }
}