export function getMasteryLabel(mastery: number) {
  if (mastery >= 4) {
    return "Strong";
  }

  if (mastery >= 2) {
    return "Developing";
  }

  return "Needs review";
}
