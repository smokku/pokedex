import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesAvgFieldsModelBase } from "./PokemonV2PokemonformspritesAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesAvgFieldsModel */
export interface PokemonV2PokemonformspritesAvgFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesAvgFieldsModel */
export { selectFromPokemonV2PokemonformspritesAvgFields, pokemonV2PokemonformspritesAvgFieldsModelPrimitives, PokemonV2PokemonformspritesAvgFieldsModelSelector } from "./PokemonV2PokemonformspritesAvgFieldsModel.base"

/**
 * PokemonV2PokemonformspritesAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonformspritesAvgFieldsModel = PokemonV2PokemonformspritesAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
