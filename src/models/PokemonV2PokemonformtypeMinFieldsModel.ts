import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeMinFieldsModelBase } from "./PokemonV2PokemonformtypeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeMinFieldsModel */
export interface PokemonV2PokemonformtypeMinFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeMinFieldsModel */
export { selectFromPokemonV2PokemonformtypeMinFields, pokemonV2PokemonformtypeMinFieldsModelPrimitives, PokemonV2PokemonformtypeMinFieldsModelSelector } from "./PokemonV2PokemonformtypeMinFieldsModel.base"

/**
 * PokemonV2PokemonformtypeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformtypeMinFieldsModel = PokemonV2PokemonformtypeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
