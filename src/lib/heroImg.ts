/**
 * Hero image utility — serves images from /heroes/ local folder (public/heroes/)
 */

const LOCAL_BASE = "/heroes";

/** Maps hero display name → actual filename (without extension) */
const HERO_FILENAME_MAP: Record<string, string> = {
  "Azzen'Ka":            "Azzen_Ka",
  "D'Arcy":              "D_Arcy",
  "Eland'orr":           "Eland_orr",
  "Kil'Groth":           "Kil_Groth",
  "Tel'Annas":           "Tel_Annas",
  "Lu Bu":               "Lu_Bu",
  "Wonder Woman":        "Wonder_Woman",
  "Bolt Baron":          "Bolt_Baron",
  "Y'bneth":             "Y_bneth",
  "The Flash":           "The_Flash",
  "Flash":               "The_Flash",
  "Flowborn Mid":        "Flowborn_Mid",
  "Flowborn (Mage)":     "Flowborn_(Mage)",
  "Flowborn (Marksman)": "Flowborn_(Marksman)",
  // Jinnar in data = Jinna image file
  "Jinnar":              "Jinna",
  "Jinna":               "Jinna",
  "Teemee":              "TeeMee",
  "TeeMee":              "TeeMee",
};

/** Heroes saved as .png instead of .jpg */
const PNG_HEROES = new Set(["Flowborn", "Flowborn (Marksman)"]);

/**
 * Get the local image URL for a hero by name.
 * @param name - The hero's display name (e.g. "Nakroth", "Azzen'Ka")
 */
export function heroImgUrl(name: string): string {
  const filename = HERO_FILENAME_MAP[name] ?? name.replace(/ /g, "_");
  const ext = PNG_HEROES.has(name) ? ".png" : ".jpg";
  return `${LOCAL_BASE}/${filename}${ext}`;
}
