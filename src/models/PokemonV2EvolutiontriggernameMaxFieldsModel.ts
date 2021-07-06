import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameMaxFieldsModelBase } from "./PokemonV2EvolutiontriggernameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameMaxFieldsModel */
export interface PokemonV2EvolutiontriggernameMaxFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameMaxFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameMaxFields, pokemonV2EvolutiontriggernameMaxFieldsModelPrimitives, PokemonV2EvolutiontriggernameMaxFieldsModelSelector } from "./PokemonV2EvolutiontriggernameMaxFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EvolutiontriggernameMaxFieldsModel = PokemonV2EvolutiontriggernameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
