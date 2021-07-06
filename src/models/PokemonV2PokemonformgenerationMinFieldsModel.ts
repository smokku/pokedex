import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationMinFieldsModelBase } from "./PokemonV2PokemonformgenerationMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationMinFieldsModel */
export interface PokemonV2PokemonformgenerationMinFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationMinFieldsModel */
export { selectFromPokemonV2PokemonformgenerationMinFields, pokemonV2PokemonformgenerationMinFieldsModelPrimitives, PokemonV2PokemonformgenerationMinFieldsModelSelector } from "./PokemonV2PokemonformgenerationMinFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformgenerationMinFieldsModel = PokemonV2PokemonformgenerationMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
