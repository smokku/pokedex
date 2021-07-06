import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameStddevFieldsModelBase } from "./PokemonV2EvolutiontriggernameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameStddevFieldsModel */
export interface PokemonV2EvolutiontriggernameStddevFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameStddevFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameStddevFields, pokemonV2EvolutiontriggernameStddevFieldsModelPrimitives, PokemonV2EvolutiontriggernameStddevFieldsModelSelector } from "./PokemonV2EvolutiontriggernameStddevFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EvolutiontriggernameStddevFieldsModel = PokemonV2EvolutiontriggernameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
