/**
 * Fonction qui additionne deux nombres.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

// Si le fichier est exécuté directement
if (require.main === module) {
  console.log("Hello GitHub Actions 🚀");
  console.log(`2 + 3 = ${add(2, 3)}`);
}

module.exports = {
  add,
};