import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationMaxFieldsModelBase } from "./PokemonV2PokemonformgenerationMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationMaxFieldsModel */
export interface PokemonV2PokemonformgenerationMaxFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationMaxFieldsModel */
export { selectFromPokemonV2PokemonformgenerationMaxFields, pokemonV2PokemonformgenerationMaxFieldsModelPrimitives, PokemonV2PokemonformgenerationMaxFieldsModelSelector } from "./PokemonV2PokemonformgenerationMaxFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonformgenerationMaxFieldsModel = PokemonV2PokemonformgenerationMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
