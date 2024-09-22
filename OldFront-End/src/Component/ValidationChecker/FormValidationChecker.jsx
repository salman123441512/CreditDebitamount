export default function FormValidationChecker(event) {
    const { name, value } = event.target;

    switch (name) {
        case "username":
            if (value.length === 0)
                return "User Name field is required";
            else if (value.length < 3 || value.length > 30)
                return "User Name field must be between 3 and 30 characters";
            break;

        case "password":
            if (value.length === 0)
                return "Password field is required";
            else if (value.length < 6 || value.length > 30)
                return "Password field must be between 6 and 30 characters";
            break;

        case "name":
            if (value.length === 0)
                return "Name field is required";
            else if (value.length < 3 || value.length > 30)
                return "Name field must be between 3 and 30 characters";
            break;

        case "email":
            if (value.length === 0)
                return "Email field is required";
            else if (value.length < 3 || value.length > 30)
                return "Email field must be between 3 and 30 characters";
            break;

        case "phone":
            if (value.length === 0)
                return "Phone field is required";
            else if (value.length !== 10)
                return "Phone field must be exactly 10 characters";
            break;

        case "aadharnumber":
            if (value.length === 0)
                return "Aadhar Number field is required";
            else if (value.length !== 12)
                return "Aadhar Number field must be exactly 12 characters";
            break;

        default:
            return null;
    }

    return null;
}
