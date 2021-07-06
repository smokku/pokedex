import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameMaxFieldsModelBase } from "./PokemonV2PokeathlonstatnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameMaxFieldsModel */
export interface PokemonV2PokeathlonstatnameMaxFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameMaxFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameMaxFields, pokemonV2PokeathlonstatnameMaxFieldsModelPrimitives, PokemonV2PokeathlonstatnameMaxFieldsModelSelector } from "./PokemonV2PokeathlonstatnameMaxFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokeathlonstatnameMaxFieldsModel = PokemonV2PokeathlonstatnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
