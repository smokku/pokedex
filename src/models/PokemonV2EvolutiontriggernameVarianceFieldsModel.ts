import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggernameVarianceFieldsModelBase } from "./PokemonV2EvolutiontriggernameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggernameVarianceFieldsModel */
export interface PokemonV2EvolutiontriggernameVarianceFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggernameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggernameVarianceFieldsModel */
export { selectFromPokemonV2EvolutiontriggernameVarianceFields, pokemonV2EvolutiontriggernameVarianceFieldsModelPrimitives, PokemonV2EvolutiontriggernameVarianceFieldsModelSelector } from "./PokemonV2EvolutiontriggernameVarianceFieldsModel.base"

/**
 * PokemonV2EvolutiontriggernameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EvolutiontriggernameVarianceFieldsModel = PokemonV2EvolutiontriggernameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
