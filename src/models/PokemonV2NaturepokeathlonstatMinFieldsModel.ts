import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatMinFieldsModelBase } from "./PokemonV2NaturepokeathlonstatMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatMinFieldsModel */
export interface PokemonV2NaturepokeathlonstatMinFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatMinFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatMinFields, pokemonV2NaturepokeathlonstatMinFieldsModelPrimitives, PokemonV2NaturepokeathlonstatMinFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatMinFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2NaturepokeathlonstatMinFieldsModel = PokemonV2NaturepokeathlonstatMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
