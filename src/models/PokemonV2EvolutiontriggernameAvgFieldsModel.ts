import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameAvgFieldsModelBase } from "./PokemonV2EvolutiontriggernameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameAvgFieldsModel */
export interface PokemonV2EvolutiontriggernameAvgFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameAvgFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameAvgFields, pokemonV2EvolutiontriggernameAvgFieldsModelPrimitives, PokemonV2EvolutiontriggernameAvgFieldsModelSelector } from "./PokemonV2EvolutiontriggernameAvgFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EvolutiontriggernameAvgFieldsModel = PokemonV2EvolutiontriggernameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
