import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesAvgFieldsModelBase } from "./PokemonV2PokemonspritesAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesAvgFieldsModel */
export interface PokemonV2PokemonspritesAvgFieldsModelType extends Instance<typeof PokemonV2PokemonspritesAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesAvgFieldsModel */
export { selectFromPokemonV2PokemonspritesAvgFields, pokemonV2PokemonspritesAvgFieldsModelPrimitives, PokemonV2PokemonspritesAvgFieldsModelSelector } from "./PokemonV2PokemonspritesAvgFieldsModel.base"

/**
 * PokemonV2PokemonspritesAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonspritesAvgFieldsModel = PokemonV2PokemonspritesAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
