import {phoneRegex, pwdRegex} from "@/constants/regexConstants.js";

export function isPasswordValid(password) {
    return pwdRegex.test(password);
}

export function isPhoneValid(phone) {
    return phoneRegex.test(phone);
}

