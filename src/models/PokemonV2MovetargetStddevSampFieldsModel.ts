import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetStddevSampFieldsModelBase } from "./PokemonV2MovetargetStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetStddevSampFieldsModel */
export interface PokemonV2MovetargetStddevSampFieldsModelType extends Instance<typeof PokemonV2MovetargetStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetStddevSampFieldsModel */
export { selectFromPokemonV2MovetargetStddevSampFields, pokemonV2MovetargetStddevSampFieldsModelPrimitives, PokemonV2MovetargetStddevSampFieldsModelSelector } from "./PokemonV2MovetargetStddevSampFieldsModel.base"

/**
 * PokemonV2MovetargetStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovetargetStddevSampFieldsModel = PokemonV2MovetargetStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
