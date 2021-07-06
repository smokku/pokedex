import { Instance } from "mobx-state-tree"
import { PokemonV2TypeVarianceFieldsModelBase } from "./PokemonV2TypeVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypeVarianceFieldsModel */
export interface PokemonV2TypeVarianceFieldsModelType extends Instance<typeof PokemonV2TypeVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypeVarianceFieldsModel */
export { selectFromPokemonV2TypeVarianceFields, pokemonV2TypeVarianceFieldsModelPrimitives, PokemonV2TypeVarianceFieldsModelSelector } from "./PokemonV2TypeVarianceFieldsModel.base"

/**
 * PokemonV2TypeVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2TypeVarianceFieldsModel = PokemonV2TypeVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
