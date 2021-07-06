import { Instance } from "mobx-state-tree"
import { PokemonV2StatnameStddevFieldsModelBase } from "./PokemonV2StatnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatnameStddevFieldsModel */
export interface PokemonV2StatnameStddevFieldsModelType extends Instance<typeof PokemonV2StatnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatnameStddevFieldsModel */
export { selectFromPokemonV2StatnameStddevFields, pokemonV2StatnameStddevFieldsModelPrimitives, PokemonV2StatnameStddevFieldsModelSelector } from "./PokemonV2StatnameStddevFieldsModel.base"

/**
 * PokemonV2StatnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2StatnameStddevFieldsModel = PokemonV2StatnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
