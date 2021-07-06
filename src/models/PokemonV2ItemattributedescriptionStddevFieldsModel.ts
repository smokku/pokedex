import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionStddevFieldsModelBase } from "./PokemonV2ItemattributedescriptionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionStddevFieldsModel */
export interface PokemonV2ItemattributedescriptionStddevFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionStddevFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionStddevFields, pokemonV2ItemattributedescriptionStddevFieldsModelPrimitives, PokemonV2ItemattributedescriptionStddevFieldsModelSelector } from "./PokemonV2ItemattributedescriptionStddevFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemattributedescriptionStddevFieldsModel = PokemonV2ItemattributedescriptionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
