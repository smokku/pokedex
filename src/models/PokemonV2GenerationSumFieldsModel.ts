import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationSumFieldsModelBase } from "./PokemonV2GenerationSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationSumFieldsModel */
export interface PokemonV2GenerationSumFieldsModelType extends Instance<typeof PokemonV2GenerationSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationSumFieldsModel */
export { selectFromPokemonV2GenerationSumFields, pokemonV2GenerationSumFieldsModelPrimitives, PokemonV2GenerationSumFieldsModelSelector } from "./PokemonV2GenerationSumFieldsModel.base"

/**
 * PokemonV2GenerationSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2GenerationSumFieldsModel = PokemonV2GenerationSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
