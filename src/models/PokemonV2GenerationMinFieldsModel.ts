import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationMinFieldsModelBase } from "./PokemonV2GenerationMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationMinFieldsModel */
export interface PokemonV2GenerationMinFieldsModelType extends Instance<typeof PokemonV2GenerationMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationMinFieldsModel */
export { selectFromPokemonV2GenerationMinFields, pokemonV2GenerationMinFieldsModelPrimitives, PokemonV2GenerationMinFieldsModelSelector } from "./PokemonV2GenerationMinFieldsModel.base"

/**
 * PokemonV2GenerationMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2GenerationMinFieldsModel = PokemonV2GenerationMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
