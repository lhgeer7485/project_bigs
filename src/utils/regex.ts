const regUsername = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const regName = /^[가-힣a-zA-Z ]{2,20}$/;
const regPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!%+#?&])[A-Za-z\d!%+#?&]{8,}$/;

export { regUsername, regName, regPassword };
