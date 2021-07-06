import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformspritesMinFieldsModelBase } from "./PokemonV2PokemonformspritesMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformspritesMinFieldsModel */
export interface PokemonV2PokemonformspritesMinFieldsModelType extends Instance<typeof PokemonV2PokemonformspritesMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformspritesMinFieldsModel */
export { selectFromPokemonV2PokemonformspritesMinFields, pokemonV2PokemonformspritesMinFieldsModelPrimitives, PokemonV2PokemonformspritesMinFieldsModelSelector } from "./PokemonV2PokemonformspritesMinFieldsModel.base"

/**
 * PokemonV2PokemonformspritesMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformspritesMinFieldsModel = PokemonV2PokemonformspritesMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
