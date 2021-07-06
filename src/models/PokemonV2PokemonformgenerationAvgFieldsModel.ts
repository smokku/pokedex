import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationAvgFieldsModelBase } from "./PokemonV2PokemonformgenerationAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationAvgFieldsModel */
export interface PokemonV2PokemonformgenerationAvgFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationAvgFieldsModel */
export { selectFromPokemonV2PokemonformgenerationAvgFields, pokemonV2PokemonformgenerationAvgFieldsModelPrimitives, PokemonV2PokemonformgenerationAvgFieldsModelSelector } from "./PokemonV2PokemonformgenerationAvgFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonformgenerationAvgFieldsModel = PokemonV2PokemonformgenerationAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
