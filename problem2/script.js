let addrErrMsg = document.querySelector(".form__input-address-error-message");
const addr = document.getElementById("input-address");
let addrValue = addr.value.trim();
let amtErrMsg = document.querySelector(".form__input-amount-error-message");
const amt = document.getElementById("input-amount");
let amtValue = amt.value.trim();
let otpErrMsg = document.querySelector(".form__input-otp-error-message");
const otp = document.getElementById("input-otp");
let otpValue = otp.value.trim();

const validateAddr = () => {
    addrValue = addr.value.trim();
    if (addrValue.length != 64) {
        addrErrMsg.innerText = "ETH address shoould be a 64 character hex string";
    } else {
        addrErrMsg.innerText = "";
    }
}

const validateAmt = () => {
    amtValue = amt.value.trim()
    if (!/^\d+\.?\d{0,2}?$/.test(amt)) {
        amtErrMsg.innerText = "Please enter a valid amount to send";
    } else {
        amtErrMsg.innerText = "";
    }
}

const validateOtp = () => {
    otpValue = otp.value.trim();
    if (otpValue.length != 6) {
        otpErrMsg.innerText = "OTP should be 6 digits long";
    } else {
        otp.innerText = "";
    }
}

document.addEventListener("submit", (event) => {
    event.preventDefault();
    validateAddr();
    validateAmt();
    validateOtp();
})