import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentAvgFieldsModelBase } from "./PokemonV2MovemetaailmentAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentAvgFieldsModel */
export interface PokemonV2MovemetaailmentAvgFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentAvgFieldsModel */
export { selectFromPokemonV2MovemetaailmentAvgFields, pokemonV2MovemetaailmentAvgFieldsModelPrimitives, PokemonV2MovemetaailmentAvgFieldsModelSelector } from "./PokemonV2MovemetaailmentAvgFieldsModel.base"

/**
 * PokemonV2MovemetaailmentAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovemetaailmentAvgFieldsModel = PokemonV2MovemetaailmentAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
