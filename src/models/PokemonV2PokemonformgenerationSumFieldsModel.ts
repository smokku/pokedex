import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationSumFieldsModelBase } from "./PokemonV2PokemonformgenerationSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationSumFieldsModel */
export interface PokemonV2PokemonformgenerationSumFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationSumFieldsModel */
export { selectFromPokemonV2PokemonformgenerationSumFields, pokemonV2PokemonformgenerationSumFieldsModelPrimitives, PokemonV2PokemonformgenerationSumFieldsModelSelector } from "./PokemonV2PokemonformgenerationSumFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonformgenerationSumFieldsModel = PokemonV2PokemonformgenerationSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
