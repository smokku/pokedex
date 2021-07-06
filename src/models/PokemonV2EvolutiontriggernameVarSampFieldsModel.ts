import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameVarSampFieldsModelBase } from "./PokemonV2EvolutiontriggernameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameVarSampFieldsModel */
export interface PokemonV2EvolutiontriggernameVarSampFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameVarSampFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameVarSampFields, pokemonV2EvolutiontriggernameVarSampFieldsModelPrimitives, PokemonV2EvolutiontriggernameVarSampFieldsModelSelector } from "./PokemonV2EvolutiontriggernameVarSampFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EvolutiontriggernameVarSampFieldsModel = PokemonV2EvolutiontriggernameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
