import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspritesMinFieldsModelBase } from "./PokemonV2PokemonspritesMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspritesMinFieldsModel */
export interface PokemonV2PokemonspritesMinFieldsModelType extends Instance<typeof PokemonV2PokemonspritesMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspritesMinFieldsModel */
export { selectFromPokemonV2PokemonspritesMinFields, pokemonV2PokemonspritesMinFieldsModelPrimitives, PokemonV2PokemonspritesMinFieldsModelSelector } from "./PokemonV2PokemonspritesMinFieldsModel.base"

/**
 * PokemonV2PokemonspritesMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonspritesMinFieldsModel = PokemonV2PokemonspritesMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
