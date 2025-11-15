import React from "react";

import { CharacterType, fetchCharacter } from "./characters";
import { CharacterInformation } from "./CharacterInformation";

type WithCharacterProps = {
    character: CharacterType
}

function withCharacter<T extends WithCharacterProps>(Component: React.ComponentType<T>) {
  // eslint-disable-next-line react/display-name
  return (props: Omit<T, keyof WithCharacterProps>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);
    
    if (loading) return <div>Hello...</div>;
    return character && <Component {...(props as T)} character={character} />;
  };
}
const Applicantion = () => {
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);
  return <div><CharacterInformationWithCharacter/></div>;
};

export default Applicantion;
