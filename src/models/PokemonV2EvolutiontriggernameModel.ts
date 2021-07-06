import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameModelBase } from "./PokemonV2EvolutiontriggernameModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameModel */
export interface PokemonV2EvolutiontriggernameModelType extends Instance<typeof PokemonV2EvolutiontriggernameModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameModel */
export { selectFromPokemonV2Evolutiontriggername, pokemonV2EvolutiontriggernameModelPrimitives, PokemonV2EvolutiontriggernameModelSelector } from "./PokemonV2EvolutiontriggernameModel.base"

/**
 * PokemonV2EvolutiontriggernameModel
 *
 * columns and relationships of "pokemon_v2_evolutiontriggername"
 */
export const PokemonV2EvolutiontriggernameModel = PokemonV2EvolutiontriggernameModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
