
export default function Motivacao() {
    const dogs = [
      "apollo.png",
      "meu-max.png", 
      "zeus.png",
      "zeca.png",
      "trio.png",
      "max.png",
      "thor.png", 
      "mz.png",
      
    ];
  
    return (
      <section className="motivacao">
        <h2>Por que a Medicina Veterinária?</h2>
        <p className="motivacao-texto">
          A medicina veterinária escolheu-me através de cada animal que cruzou meu
          caminho. Acredito que cuidar daqueles que não podem verbalizar sua dor é
          não apenas uma profissão, mas uma missão de vida.
        </p>
        
        <div className="galeria-animais">
          {dogs.map((img, index) => (
            <img 
              key={index} 
              src={`/images/${img}`} 
              className="animal-img" 
              alt={`Animal ${index + 1}`}
            />
          ))}
        </div>
      </section>
    );
  }