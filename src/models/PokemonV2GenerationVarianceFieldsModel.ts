import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationVarianceFieldsModelBase } from "./PokemonV2GenerationVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationVarianceFieldsModel */
export interface PokemonV2GenerationVarianceFieldsModelType extends Instance<typeof PokemonV2GenerationVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationVarianceFieldsModel */
export { selectFromPokemonV2GenerationVarianceFields, pokemonV2GenerationVarianceFieldsModelPrimitives, PokemonV2GenerationVarianceFieldsModelSelector } from "./PokemonV2GenerationVarianceFieldsModel.base"

/**
 * PokemonV2GenerationVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2GenerationVarianceFieldsModel = PokemonV2GenerationVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
