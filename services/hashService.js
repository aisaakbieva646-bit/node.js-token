import bcrypt from "bcrypt";

class HashService {
  async hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);



      const hash = await bcrypt.hash(password, salt);

      return hash;
    } catch (err) {
      throw new Error("Ошибка при хэшировании пароля");
    }
  }

  async comparePassword(password, hash) {
    try {
      return await bcrypt.compare(password, hash);
    } catch (err) {
      throw new Error("Ошибка при сравнении паролей");
    }
  }
}
export default new HashService();







