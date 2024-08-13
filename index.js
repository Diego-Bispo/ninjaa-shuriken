class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = "Naruto Uzumaki";
      this.idade = 16;             
      this.tipo =  "ninja";
    }
  
    atacar() {
      let ataque;
  
      if (this.tipo ===  "ninja") {
        ataque = "usou shuriken";
      }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const naruto = new Heroi('Naruto Uzumaki', 16, 'ninja');

  
