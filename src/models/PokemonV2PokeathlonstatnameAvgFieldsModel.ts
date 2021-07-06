import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameAvgFieldsModelBase } from "./PokemonV2PokeathlonstatnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameAvgFieldsModel */
export interface PokemonV2PokeathlonstatnameAvgFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameAvgFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameAvgFields, pokemonV2PokeathlonstatnameAvgFieldsModelPrimitives, PokemonV2PokeathlonstatnameAvgFieldsModelSelector } from "./PokemonV2PokeathlonstatnameAvgFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokeathlonstatnameAvgFieldsModel = PokemonV2PokeathlonstatnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
