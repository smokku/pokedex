import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaAvgFieldsModelBase } from "./PokemonV2MovemetaAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaAvgFieldsModel */
export interface PokemonV2MovemetaAvgFieldsModelType extends Instance<typeof PokemonV2MovemetaAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaAvgFieldsModel */
export { selectFromPokemonV2MovemetaAvgFields, pokemonV2MovemetaAvgFieldsModelPrimitives, PokemonV2MovemetaAvgFieldsModelSelector } from "./PokemonV2MovemetaAvgFieldsModel.base"

/**
 * PokemonV2MovemetaAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovemetaAvgFieldsModel = PokemonV2MovemetaAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
