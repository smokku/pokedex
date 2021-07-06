import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapVarianceFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapVarianceFieldsModel */
export interface PokemonV2EncounterconditionvaluemapVarianceFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapVarianceFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapVarianceFields, pokemonV2EncounterconditionvaluemapVarianceFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapVarianceFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapVarianceFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EncounterconditionvaluemapVarianceFieldsModel = PokemonV2EncounterconditionvaluemapVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
