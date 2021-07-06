import { Instance } from "mobx-state-tree"
import { PokemonV2TypenameStddevFieldsModelBase } from "./PokemonV2TypenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypenameStddevFieldsModel */
export interface PokemonV2TypenameStddevFieldsModelType extends Instance<typeof PokemonV2TypenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypenameStddevFieldsModel */
export { selectFromPokemonV2TypenameStddevFields, pokemonV2TypenameStddevFieldsModelPrimitives, PokemonV2TypenameStddevFieldsModelSelector } from "./PokemonV2TypenameStddevFieldsModel.base"

/**
 * PokemonV2TypenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2TypenameStddevFieldsModel = PokemonV2TypenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
