import { Instance } from "mobx-state-tree"
import { PokemonV2LocationStddevFieldsModelBase } from "./PokemonV2LocationStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationStddevFieldsModel */
export interface PokemonV2LocationStddevFieldsModelType extends Instance<typeof PokemonV2LocationStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationStddevFieldsModel */
export { selectFromPokemonV2LocationStddevFields, pokemonV2LocationStddevFieldsModelPrimitives, PokemonV2LocationStddevFieldsModelSelector } from "./PokemonV2LocationStddevFieldsModel.base"

/**
 * PokemonV2LocationStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2LocationStddevFieldsModel = PokemonV2LocationStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
