import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameStddevPopFieldsModelBase } from "./PokemonV2EvolutiontriggernameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameStddevPopFieldsModel */
export interface PokemonV2EvolutiontriggernameStddevPopFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameStddevPopFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameStddevPopFields, pokemonV2EvolutiontriggernameStddevPopFieldsModelPrimitives, PokemonV2EvolutiontriggernameStddevPopFieldsModelSelector } from "./PokemonV2EvolutiontriggernameStddevPopFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EvolutiontriggernameStddevPopFieldsModel = PokemonV2EvolutiontriggernameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
