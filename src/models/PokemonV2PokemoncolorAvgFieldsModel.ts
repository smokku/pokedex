import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolorAvgFieldsModelBase } from "./PokemonV2PokemoncolorAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolorAvgFieldsModel */
export interface PokemonV2PokemoncolorAvgFieldsModelType extends Instance<typeof PokemonV2PokemoncolorAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolorAvgFieldsModel */
export { selectFromPokemonV2PokemoncolorAvgFields, pokemonV2PokemoncolorAvgFieldsModelPrimitives, PokemonV2PokemoncolorAvgFieldsModelSelector } from "./PokemonV2PokemoncolorAvgFieldsModel.base"

/**
 * PokemonV2PokemoncolorAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemoncolorAvgFieldsModel = PokemonV2PokemoncolorAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
