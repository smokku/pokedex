import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapSumFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapSumFieldsModel */
export interface PokemonV2EncounterconditionvaluemapSumFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapSumFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapSumFields, pokemonV2EncounterconditionvaluemapSumFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapSumFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapSumFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2EncounterconditionvaluemapSumFieldsModel = PokemonV2EncounterconditionvaluemapSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
