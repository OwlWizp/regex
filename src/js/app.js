export default function getSpecialAttack(character) {
  const { special } = character;
  const result = [];
  special.forEach((attack) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = attack;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
