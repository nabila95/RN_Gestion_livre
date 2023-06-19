class Livre {
    constructor(
      id,
      categorieId,
      titre,
      description,
      tomes,
      imageUrl,
      enCours
    ) {
      this.id = id;
      this.categorieId = categorieId;
      this.titre = titre;
      this.description = description;
      this.tomes = tomes;
      this.imageUrl = imageUrl;
      this.enCours = enCours;
    }
  }
  
  export default Livre;