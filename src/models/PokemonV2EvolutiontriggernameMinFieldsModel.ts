import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameMinFieldsModelBase } from "./PokemonV2EvolutiontriggernameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameMinFieldsModel */
export interface PokemonV2EvolutiontriggernameMinFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameMinFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameMinFields, pokemonV2EvolutiontriggernameMinFieldsModelPrimitives, PokemonV2EvolutiontriggernameMinFieldsModelSelector } from "./PokemonV2EvolutiontriggernameMinFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EvolutiontriggernameMinFieldsModel = PokemonV2EvolutiontriggernameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
