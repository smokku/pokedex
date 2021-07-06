import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameMinFieldsModelBase } from "./PokemonV2PokeathlonstatnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameMinFieldsModel */
export interface PokemonV2PokeathlonstatnameMinFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameMinFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameMinFields, pokemonV2PokeathlonstatnameMinFieldsModelPrimitives, PokemonV2PokeathlonstatnameMinFieldsModelSelector } from "./PokemonV2PokeathlonstatnameMinFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokeathlonstatnameMinFieldsModel = PokemonV2PokeathlonstatnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
