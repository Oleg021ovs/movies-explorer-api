module.exports.linkValidate = /^(https|http)?:\/\/(www.)?[^-_.\s](\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3})?(:\d+)?(.+[#a-zA-Z/:0-9]{1,})?\.(.+[#a-zA-Z/:0-9]{1,})?$/i;

const {
  PORT_DEV = '3000',
  MONGO_DEV = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  JWT_SECRET = 'super-strong-secret',
} = process.env;

module.exports = {
  PORT_DEV, MONGO_DEV, JWT_SECRET,
};
