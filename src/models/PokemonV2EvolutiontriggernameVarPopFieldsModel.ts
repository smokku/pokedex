import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameVarPopFieldsModelBase } from "./PokemonV2EvolutiontriggernameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameVarPopFieldsModel */
export interface PokemonV2EvolutiontriggernameVarPopFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameVarPopFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameVarPopFields, pokemonV2EvolutiontriggernameVarPopFieldsModelPrimitives, PokemonV2EvolutiontriggernameVarPopFieldsModelSelector } from "./PokemonV2EvolutiontriggernameVarPopFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2EvolutiontriggernameVarPopFieldsModel = PokemonV2EvolutiontriggernameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
