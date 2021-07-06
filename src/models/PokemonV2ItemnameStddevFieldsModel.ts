import { Instance } from "mobx-state-tree"
import { PokemonV2ItemnameStddevFieldsModelBase } from "./PokemonV2ItemnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemnameStddevFieldsModel */
export interface PokemonV2ItemnameStddevFieldsModelType extends Instance<typeof PokemonV2ItemnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemnameStddevFieldsModel */
export { selectFromPokemonV2ItemnameStddevFields, pokemonV2ItemnameStddevFieldsModelPrimitives, PokemonV2ItemnameStddevFieldsModelSelector } from "./PokemonV2ItemnameStddevFieldsModel.base"

/**
 * PokemonV2ItemnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemnameStddevFieldsModel = PokemonV2ItemnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
