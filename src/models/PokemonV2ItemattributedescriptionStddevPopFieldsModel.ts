import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionStddevPopFieldsModelBase } from "./PokemonV2ItemattributedescriptionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionStddevPopFieldsModel */
export interface PokemonV2ItemattributedescriptionStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionStddevPopFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionStddevPopFields, pokemonV2ItemattributedescriptionStddevPopFieldsModelPrimitives, PokemonV2ItemattributedescriptionStddevPopFieldsModelSelector } from "./PokemonV2ItemattributedescriptionStddevPopFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemattributedescriptionStddevPopFieldsModel = PokemonV2ItemattributedescriptionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
