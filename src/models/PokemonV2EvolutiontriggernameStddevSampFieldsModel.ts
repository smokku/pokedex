import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameStddevSampFieldsModelBase } from "./PokemonV2EvolutiontriggernameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameStddevSampFieldsModel */
export interface PokemonV2EvolutiontriggernameStddevSampFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameStddevSampFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameStddevSampFields, pokemonV2EvolutiontriggernameStddevSampFieldsModelPrimitives, PokemonV2EvolutiontriggernameStddevSampFieldsModelSelector } from "./PokemonV2EvolutiontriggernameStddevSampFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EvolutiontriggernameStddevSampFieldsModel = PokemonV2EvolutiontriggernameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
