import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthratedescriptionStddevSampFieldsModelBase } from "./PokemonV2GrowthratedescriptionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthratedescriptionStddevSampFieldsModel */
export interface PokemonV2GrowthratedescriptionStddevSampFieldsModelType extends Instance<typeof PokemonV2GrowthratedescriptionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthratedescriptionStddevSampFieldsModel */
export { selectFromPokemonV2GrowthratedescriptionStddevSampFields, pokemonV2GrowthratedescriptionStddevSampFieldsModelPrimitives, PokemonV2GrowthratedescriptionStddevSampFieldsModelSelector } from "./PokemonV2GrowthratedescriptionStddevSampFieldsModel.base"

/**
 * PokemonV2GrowthratedescriptionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GrowthratedescriptionStddevSampFieldsModel = PokemonV2GrowthratedescriptionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
