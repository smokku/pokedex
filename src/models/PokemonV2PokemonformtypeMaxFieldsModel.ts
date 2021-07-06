import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeMaxFieldsModelBase } from "./PokemonV2PokemonformtypeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeMaxFieldsModel */
export interface PokemonV2PokemonformtypeMaxFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeMaxFieldsModel */
export { selectFromPokemonV2PokemonformtypeMaxFields, pokemonV2PokemonformtypeMaxFieldsModelPrimitives, PokemonV2PokemonformtypeMaxFieldsModelSelector } from "./PokemonV2PokemonformtypeMaxFieldsModel.base"

/**
 * PokemonV2PokemonformtypeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformtypeMaxFieldsModel = PokemonV2PokemonformtypeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
