export default function Characters(props) {
  const { characters } = props;
  return (
    <div className="characters">
      <h1>Character</h1>
      <span className="back-home">Back to Home</span>
      <div className="container-characters">
        {characters.map((character, index) => {
          return (
            <div className="character-container" key={index}>
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              <div>
                <h3>{character.name}</h3>
                <h6>
                  {character.status === "Alive" ? (
                    <>
                      <span className="alive" />
                      Alive
                    </>
                  ) : (
                    <>
                      <span className="dead" />
                      Dead
                    </>
                  )}
                </h6>
                <p>
                  <span className='text-grey'>Episodios:</span>
                  <span>{character.episode.length}</span>
                  </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
