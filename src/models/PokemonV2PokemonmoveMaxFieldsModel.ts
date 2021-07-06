import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveMaxFieldsModelBase } from "./PokemonV2PokemonmoveMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveMaxFieldsModel */
export interface PokemonV2PokemonmoveMaxFieldsModelType extends Instance<typeof PokemonV2PokemonmoveMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveMaxFieldsModel */
export { selectFromPokemonV2PokemonmoveMaxFields, pokemonV2PokemonmoveMaxFieldsModelPrimitives, PokemonV2PokemonmoveMaxFieldsModelSelector } from "./PokemonV2PokemonmoveMaxFieldsModel.base"

/**
 * PokemonV2PokemonmoveMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonmoveMaxFieldsModel = PokemonV2PokemonmoveMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
