import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformMinFieldsModelBase } from "./PokemonV2PokemonformMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformMinFieldsModel */
export interface PokemonV2PokemonformMinFieldsModelType extends Instance<typeof PokemonV2PokemonformMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformMinFieldsModel */
export { selectFromPokemonV2PokemonformMinFields, pokemonV2PokemonformMinFieldsModelPrimitives, PokemonV2PokemonformMinFieldsModelSelector } from "./PokemonV2PokemonformMinFieldsModel.base"

/**
 * PokemonV2PokemonformMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonformMinFieldsModel = PokemonV2PokemonformMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
