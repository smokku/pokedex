import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestylenameStddevSampFieldsModelBase } from "./PokemonV2MovebattlestylenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestylenameStddevSampFieldsModel */
export interface PokemonV2MovebattlestylenameStddevSampFieldsModelType extends Instance<typeof PokemonV2MovebattlestylenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestylenameStddevSampFieldsModel */
export { selectFromPokemonV2MovebattlestylenameStddevSampFields, pokemonV2MovebattlestylenameStddevSampFieldsModelPrimitives, PokemonV2MovebattlestylenameStddevSampFieldsModelSelector } from "./PokemonV2MovebattlestylenameStddevSampFieldsModel.base"

/**
 * PokemonV2MovebattlestylenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovebattlestylenameStddevSampFieldsModel = PokemonV2MovebattlestylenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
