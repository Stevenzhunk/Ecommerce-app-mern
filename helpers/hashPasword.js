import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    return hashedpassword;
  } catch (error) {
    console.log(`password error ${error}`.bgRed.white);
  }
};

export const comparePassword = async (password, hashedpassword) => {
  try {
    const comparePassword = await bcrypt.compare(password, hashedpassword);
    return comparePassword;
  } catch (error) {
    console.log(`password error ${error}`.bgRed.white);
  }
};
