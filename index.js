
/**
 * chinese only
 */
module.exports = function (text) {
  text = text.toString();
  return text.replace(/[^\x00-\xff]/g,"**").length;
}
