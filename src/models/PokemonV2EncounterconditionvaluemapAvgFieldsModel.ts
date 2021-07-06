import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapAvgFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapAvgFieldsModel */
export interface PokemonV2EncounterconditionvaluemapAvgFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapAvgFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapAvgFields, pokemonV2EncounterconditionvaluemapAvgFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapAvgFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapAvgFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionvaluemapAvgFieldsModel = PokemonV2EncounterconditionvaluemapAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
