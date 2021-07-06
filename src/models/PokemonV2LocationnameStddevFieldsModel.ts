import { Instance } from "mobx-state-tree"
import { PokemonV2LocationnameStddevFieldsModelBase } from "./PokemonV2LocationnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationnameStddevFieldsModel */
export interface PokemonV2LocationnameStddevFieldsModelType extends Instance<typeof PokemonV2LocationnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationnameStddevFieldsModel */
export { selectFromPokemonV2LocationnameStddevFields, pokemonV2LocationnameStddevFieldsModelPrimitives, PokemonV2LocationnameStddevFieldsModelSelector } from "./PokemonV2LocationnameStddevFieldsModel.base"

/**
 * PokemonV2LocationnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationnameStddevFieldsModel = PokemonV2LocationnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
