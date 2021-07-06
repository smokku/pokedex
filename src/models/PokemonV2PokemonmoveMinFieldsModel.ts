import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveMinFieldsModelBase } from "./PokemonV2PokemonmoveMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveMinFieldsModel */
export interface PokemonV2PokemonmoveMinFieldsModelType extends Instance<typeof PokemonV2PokemonmoveMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveMinFieldsModel */
export { selectFromPokemonV2PokemonmoveMinFields, pokemonV2PokemonmoveMinFieldsModelPrimitives, PokemonV2PokemonmoveMinFieldsModelSelector } from "./PokemonV2PokemonmoveMinFieldsModel.base"

/**
 * PokemonV2PokemonmoveMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonmoveMinFieldsModel = PokemonV2PokemonmoveMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
