import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameStddevFieldsModelBase } from "./PokemonV2PokeathlonstatnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameStddevFieldsModel */
export interface PokemonV2PokeathlonstatnameStddevFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameStddevFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameStddevFields, pokemonV2PokeathlonstatnameStddevFieldsModelPrimitives, PokemonV2PokeathlonstatnameStddevFieldsModelSelector } from "./PokemonV2PokeathlonstatnameStddevFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokeathlonstatnameStddevFieldsModel = PokemonV2PokeathlonstatnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
