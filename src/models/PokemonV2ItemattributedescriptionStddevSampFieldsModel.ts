import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributedescriptionStddevSampFieldsModelBase } from "./PokemonV2ItemattributedescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributedescriptionStddevSampFieldsModel */
export interface PokemonV2ItemattributedescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemattributedescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributedescriptionStddevSampFieldsModel */
export { selectFromPokemonV2ItemattributedescriptionStddevSampFields, pokemonV2ItemattributedescriptionStddevSampFieldsModelPrimitives, PokemonV2ItemattributedescriptionStddevSampFieldsModelSelector } from "./PokemonV2ItemattributedescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2ItemattributedescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemattributedescriptionStddevSampFieldsModel = PokemonV2ItemattributedescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
