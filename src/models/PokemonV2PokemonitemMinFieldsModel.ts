import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemMinFieldsModelBase } from "./PokemonV2PokemonitemMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemMinFieldsModel */
export interface PokemonV2PokemonitemMinFieldsModelType extends Instance<typeof PokemonV2PokemonitemMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemMinFieldsModel */
export { selectFromPokemonV2PokemonitemMinFields, pokemonV2PokemonitemMinFieldsModelPrimitives, PokemonV2PokemonitemMinFieldsModelSelector } from "./PokemonV2PokemonitemMinFieldsModel.base"

/**
 * PokemonV2PokemonitemMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonitemMinFieldsModel = PokemonV2PokemonitemMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
