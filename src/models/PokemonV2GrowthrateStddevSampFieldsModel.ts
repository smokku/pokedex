import { Instance } from "mobx-state-tree"
import { PokemonV2GrowthrateStddevSampFieldsModelBase } from "./PokemonV2GrowthrateStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GrowthrateStddevSampFieldsModel */
export interface PokemonV2GrowthrateStddevSampFieldsModelType extends Instance<typeof PokemonV2GrowthrateStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GrowthrateStddevSampFieldsModel */
export { selectFromPokemonV2GrowthrateStddevSampFields, pokemonV2GrowthrateStddevSampFieldsModelPrimitives, PokemonV2GrowthrateStddevSampFieldsModelSelector } from "./PokemonV2GrowthrateStddevSampFieldsModel.base"

/**
 * PokemonV2GrowthrateStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GrowthrateStddevSampFieldsModel = PokemonV2GrowthrateStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
