import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkVarianceFieldsModelBase } from "./PokemonV2PalparkVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkVarianceFieldsModel */
export interface PokemonV2PalparkVarianceFieldsModelType extends Instance<typeof PokemonV2PalparkVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkVarianceFieldsModel */
export { selectFromPokemonV2PalparkVarianceFields, pokemonV2PalparkVarianceFieldsModelPrimitives, PokemonV2PalparkVarianceFieldsModelSelector } from "./PokemonV2PalparkVarianceFieldsModel.base"

/**
 * PokemonV2PalparkVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PalparkVarianceFieldsModel = PokemonV2PalparkVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
