class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome || "Naruto Uzumaki";  // Nome padrão "Naruto Uzumaki"
      this.idade = idade || 16;              // Idade padrão 16
      this.tipo = tipo || 'ninja';           // Tipo padrão 'ninja'
    }
  
    // Método para o herói atacar
    atacar() {
      let ataque;
  
      if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      } else {
        ataque = 'fez um ataque indefinido';
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando o herói Naruto
  const naruto = new Heroi('Naruto Uzumaki', 16, 'ninja');
  
  // Chamando o método atacar para Naruto
  naruto.atacar(); // O ninja Naruto Uzumaki atacou usando shuriken
  