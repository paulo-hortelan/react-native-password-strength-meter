import zxcvbn from "zxcvbn";

function scorePassword(pass, minLength, limit, variations = {}) {
  const result = zxcvbn(pass);

  return (result.score + 1) * 10;
}

export default scorePassword;
