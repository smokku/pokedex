import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatVarianceFieldsModelBase } from "./PokemonV2NaturepokeathlonstatVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatVarianceFieldsModel */
export interface PokemonV2NaturepokeathlonstatVarianceFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatVarianceFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatVarianceFields, pokemonV2NaturepokeathlonstatVarianceFieldsModelPrimitives, PokemonV2NaturepokeathlonstatVarianceFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatVarianceFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2NaturepokeathlonstatVarianceFieldsModel = PokemonV2NaturepokeathlonstatVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
