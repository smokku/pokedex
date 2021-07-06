import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameStddevPopFieldsModelBase } from "./PokemonV2PokeathlonstatnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameStddevPopFieldsModel */
export interface PokemonV2PokeathlonstatnameStddevPopFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameStddevPopFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameStddevPopFields, pokemonV2PokeathlonstatnameStddevPopFieldsModelPrimitives, PokemonV2PokeathlonstatnameStddevPopFieldsModelSelector } from "./PokemonV2PokeathlonstatnameStddevPopFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokeathlonstatnameStddevPopFieldsModel = PokemonV2PokeathlonstatnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
